import styled from "styled-components";

export const Container = styled.footer`
  background: rgba(43, 43, 43, 0.95);
  backdrop-filter: blur(10px);
  padding: 4rem 15rem;
  margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  /* Gradient overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 124, 240, 0.05),
      rgba(0, 223, 216, 0.05)
    );
    pointer-events: none;
  }

  .logo {
    font-size: 2.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #007CF0, #00DFD8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
    
    &:hover {
      text-shadow: 0 0 20px rgba(0, 223, 216, 0.5);
      transform: translateY(-2px);
    }
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    
    img {
      width: 2.6rem;
      animation: spinning 8s infinite linear;
      filter: drop-shadow(0 0 8px rgba(0, 223, 216, 0.3));
      
      @keyframes spinning {
        0% {
          transform: rotate(0) scale(1);
        }
        50% {
          transform: rotate(180deg) scale(1.1);
        }
        100% {
          transform: rotate(360deg) scale(1);
        }
      }
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    a {
      transition: all 0.3s ease;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 0;
        height: 0;
        background: radial-gradient(circle, rgba(0, 223, 216, 0.2) 0%, transparent 70%);
        border-radius: 50%;
        transition: all 0.3s ease;
        z-index: -1;
      }

      &:hover {
        transform: translateY(-3px);
        
        &::before {
          width: 4rem;
          height: 4rem;
        }
      }
    }

    img, span {
      font-size: 3rem;
      width: 3rem;
      transition: all 0.3s ease;
      filter: grayscale(100%) brightness(80%);
      
      &:hover {
        filter: grayscale(0%) brightness(100%);
      }
    }
  }

  @media(max-width: 800px) {
    padding: 4rem 10rem;
    flex-direction: column;
    gap: 3rem;
    text-align: center;

    .social-media {
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  @media(max-width: 600px) {
    padding: 4rem 2rem;
    
    p {
      font-size: 1.4rem;
      flex-direction: column;
      gap: 1rem;
    }

    .social-media {
      gap: 1.5rem;
      
      img, span {
        width: 2.5rem;
      }
    }

    .logo {
      font-size: 2.4rem;
    }
  }

  /* Optional: Add fade-in animation */
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
  animation: fadeIn 0.5s ease-in-out;
`