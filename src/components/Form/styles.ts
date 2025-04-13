import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  place-items: center;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 3.2rem;
    background: linear-gradient(90deg, #007CF0, #00DFD8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 20px rgba(0, 223, 216, 0.3);
  }

  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 60rem;
    
    input, textarea {
      width: 100%;
      padding: 1.4rem 2rem;
      border-radius: 1.6rem;
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-weight: 500;
      backdrop-filter: blur(4px);
      transition: all 0.3s ease-in-out;
      
      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
      
      &:focus {
        border-color: #00DFD8;
        box-shadow: 0 0 20px rgba(0, 223, 216, 0.2);
        background: rgba(255, 255, 255, 0.08);
        
        &::placeholder {
          opacity: 0.7;
        }
      }

      &:hover {
        border-color: rgba(255, 255, 255, 0.3);
      }
    }

    textarea {
      height: 20rem;
      overflow-y: auto;
      resize: none;
      line-height: 1.6;
      
      &::-webkit-scrollbar {
        width: 8px;
      }
      
      &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 4px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: linear-gradient(45deg, #007CF0, #00DFD8);
        border-radius: 4px;
        
        &:hover {
          background: linear-gradient(45deg, #00DFD8, #007CF0);
        }
      }
    }

    button {
      padding: 1.4rem 6rem;
      text-transform: uppercase;
      font-weight: 600;
      letter-spacing: 0.1rem;
      background: linear-gradient(45deg, #007CF0, #00DFD8);
      border-radius: 3rem;
      transition: all 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background: linear-gradient(45deg, #00DFD8, #007CF0);
        transition: all 0.3s ease-in-out;
        z-index: -1;
      }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 223, 216, 0.2);
        
        &:before {
          width: 100%;
        }
      }
      
      &:active {
        transform: translateY(-1px);
      }
    }
  }

  @media (max-width: 740px) {
    padding: 0 2rem;
    
    form {
      width: 100%;
      
      input, textarea {
        width: 100%;
      }
      
      button {
        width: 100%;
      }
    }
  }
`

export const ContainerSucces = styled.div`
  margin-top: 10rem;
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  button {
    border-radius: 3rem;
    padding: 1.2rem 4rem;
    margin-top: 2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1rem;
    background: linear-gradient(45deg, #007CF0, #00DFD8);
    color: #ffffff;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 223, 216, 0.2);
      background: linear-gradient(45deg, #00DFD8, #007CF0);
    }
    
    &:active {
      transform: translateY(-1px);
    }
  }
`