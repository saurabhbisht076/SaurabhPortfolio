import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.8rem 10rem;
  background: rgba(17, 25, 40, 0.75);
  backdrop-filter: blur(12px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;
    
    a {
      color: #FFF;
      padding: 0.8rem 1.2rem;
      font-family: 'Red Hat Display', sans-serif;
      font-weight: 500;
      text-transform: uppercase;
      transition: all 0.3s ease;
      position: relative;
      
      &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, #007CF0, #00DFD8);
        transition: all 0.3s ease-in-out;
        border-radius: 2px;
      }

      &:hover:before {
        width: 100%;
      }

      &.button {
        padding: 0.8rem 2.4rem;
        background: linear-gradient(
          45deg,
          rgba(76, 0, 255, 0.15) 0%,
          rgba(0, 223, 216, 0.15) 100%
        );
        border-radius: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.125);
        
        &:hover {
          transform: translateY(-2px);
          background: linear-gradient(
            45deg,
            rgba(76, 0, 255, 0.25) 0%,
            rgba(0, 223, 216, 0.25) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
      }

      &:hover {
        color: #00DFD8;
      }
    }
  }

  .menu-container {
    cursor: pointer;
    padding: 0.6rem 0;
    z-index: 1001;
  }

  .menu {
    width: 2.2rem;
    height: 0.2rem;
    background: #FFF;
    position: relative;
    cursor: pointer;
    display: none;
    transition: all 0.3s ease-in-out;

    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background: #FFF;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    &:before {
      bottom: 0.7rem;
    }
    
    &:after {
      top: 0.7rem;
    }

    &.active {
      background-color: transparent;
      
      &:before {
        bottom: 0;
        transform: rotate(45deg);
        background: #00DFD8;
      }

      &:after {
        top: 0;
        transform: rotate(-45deg);
        background: #00DFD8;
      }
    }
  }

  input[type=checkbox] {
    height: 0;
    width: 0;
    visibility: hidden;
    outline: none;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 55px;
    height: 30px;
    background: linear-gradient(90deg, #007CF0, #00DFD8);
    display: block;
    border-radius: 100px;
    position: relative;
    margin-left: auto;
    right: 10px;
    transition: all 0.3s ease;
    
    &:after {
      content: '';
      background: #FFF;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      position: absolute;
      top: 4px;
      left: 4px;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    }

    &:hover {
      opacity: 0.9;
    }
  }

  input:checked + label {
    background: linear-gradient(90deg, #7928CA, #FF0080);
    
    &:after {
      left: calc(100% - 5px);
      transform: translateX(-100%);
    }
  }

  @media (max-width: 960px) {
    padding: 1.8rem 3rem;

    .menu {
      display: block;
    }

    nav {
      -ms-overflow-style: none;
      scrollbar-width: none;
      overflow: hidden;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      transition: all 0.3s ease-in-out;
      background: rgba(17, 25, 40, 0.95);
      backdrop-filter: blur(12px);

      a.button {
        background: linear-gradient(90deg, #7928CA, #FF0080);
        color: #FFF;
        border: none;
        
        &:hover {
          opacity: 0.8;
          transform: translateY(-2px);
        }
      }

      &.active {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`