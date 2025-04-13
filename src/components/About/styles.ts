import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  position: relative;

  .hard-skills {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(4px);
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.1);
    
    &:hover {
      transform: translateY(-5px);
      background: rgba(0, 223, 216, 0.1);
      border-color: rgba(0, 223, 216, 0.3);
      box-shadow: 0 8px 32px rgba(0, 223, 216, 0.1);

      img {
        transform: scale(1.1) rotate(5deg);
        filter: drop-shadow(0 4px 8px rgba(0, 223, 216, 0.3));
      }
    }

    img {
      width: 3.4rem;
      transition: all 0.3s ease-in-out;
    }
  }

  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0;
    color: var(--green);
    position: relative;
    background: linear-gradient(90deg, #00DFD8, #007CF0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -0.5rem;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #00DFD8, transparent);
      border-radius: 1px;
    }
  }

  h3 {
    margin-top: 2rem;
    color: var(--green);
    font-size: 2.2rem;
    position: relative;
    display: inline-block;
    
    &::before {
      content: '{ ';
      color: #007CF0;
      margin-right: 0.5rem;
    }
    
    &::after {
      content: ' }';
      color: #007CF0;
      margin-left: 0.5rem;
    }
  }

  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 400;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
  }

  .about-image {
    text-align: center;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      top: 2rem;
      left: 50%;
      transform: translateX(-50%);
      width: 75%;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(0, 223, 216, 0.1),
        rgba(0, 124, 240, 0.1)
      );
      border-radius: 2rem;
      filter: blur(20px);
      z-index: -1;
    }
    
    img {
      margin-top: 2rem;
      width: 75%;
      border-radius: 2rem;
      transition: all 0.5s ease-in-out;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 15px 45px rgba(0, 223, 216, 0.2);
      }
    }
  }

  @media only screen and (max-width: 480px) {
    margin-top: 8rem;
    padding: 0 2rem;

    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      
      img {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: 960px) {
    display: block;
    text-align: center;
    
    h2 {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    .hard-skills {
      justify-content: center;
      margin: 2rem auto;
      max-width: 600px;
    }
    
    .about-image {
      display: flex;
      justify-content: center;
      max-width: 100%;
      margin: 4rem auto;
      
      img {
        width: 100%;
        max-width: 500px;
      }
    }
  }
`