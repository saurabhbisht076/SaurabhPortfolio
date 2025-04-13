import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  position: relative;

  header {
    text-align: center;
    margin-bottom: 4rem;
    
    h2 {
      text-align: center;
      font-size: 4rem;
      background: linear-gradient(90deg, #007CF0, #00DFD8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 1rem;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        background: linear-gradient(90deg, #007CF0, #00DFD8);
        border-radius: 2px;
      }
    }

    p {
      color: var(--green);
      font-weight: 500;
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      margin-top: 2rem;
    }
  }

  .contacts {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    place-items: center;
    margin-top: 3rem;
    perspective: 1000px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      max-width: 30rem;
      gap: 2rem;
      background: linear-gradient(
        45deg,
        rgba(35, 206, 107, 0.95),
        rgba(35, 206, 107, 0.85)
      );
      border-radius: 1.6rem;
      padding: 2rem 3rem;
      transition: all 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.2);
      transform-style: preserve-3d;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          rgba(227, 31, 113, 0.95),
          rgba(227, 31, 113, 0.85)
        );
        opacity: 0;
        transition: all 0.3s ease-in-out;
        z-index: 1;
      }

      img {
        width: 4rem;
        position: relative;
        z-index: 2;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
        transition: all 0.3s ease-in-out;
      }

      a {
        color: var(--black);
        font-weight: 600;
        position: relative;
        z-index: 2;
        transition: all 0.3s ease-in-out;
        font-size: 1.6rem;
        letter-spacing: 0.05rem;
      }

      &:hover {
        transform: translateY(-5px) rotateX(5deg);
        box-shadow: 0 15px 35px rgba(227, 31, 113, 0.2);

        &::before {
          opacity: 1;
        }

        a {
          color: #FFF;
        }

        img {
          transform: scale(1.1) rotate(5deg);
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
        }
      }
    }
  }

  @media(max-width: 960px) {
    .contacts {
      flex-direction: column;
      gap: 2rem;
      padding: 0 2rem;

      div {
        width: 100%;
        max-width: 100%;
        
        &:hover {
          transform: translateY(-3px) rotateX(0);
        }
      }
    }
  }

  @media(max-width: 480px) {
    header {
      h2 {
        font-size: 3.2rem;
      }
      
      p {
        font-size: 1.6rem;
      }
    }

    .contacts {
      div {
        padding: 1.8rem 2.4rem;
        
        img {
          width: 3.5rem;
        }
        
        a {
          font-size: 1.4rem;
        }
      }
    }
  }
`