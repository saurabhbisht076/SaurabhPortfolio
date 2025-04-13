import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  position: relative;

  .hero-text {
    .greeting {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.textColor || 'rgba(255, 255, 255, 0.85)'};
      line-height: 1.6;
      margin-bottom: 1rem;
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;
      animation-delay: 0.2s;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        margin: 0 0.5rem;
        animation: wave 2s ease-in-out infinite;
      }
    }
    h1 {
      font-size: 7rem;
      line-height: 1.2;
      background: linear-gradient(
        45deg,
        #007CF0,
        #00DFD8,
        #7928CA,
        #FF0080
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 300% 300%;
      animation: gradient-animation 15s ease infinite,
                 fadeInUp 0.8s ease forwards;
      opacity: 0;
    }

    h3 {
      color: #00DFD8;
      margin: 1.5rem 0;
      font-size: 2.2rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
      text-shadow: 0 0 20px rgba(0, 223, 216, 0.5);
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;
      animation-delay: 0.4s;
    }

    p.small-resume {
      margin-bottom: 5rem;
      position: relative;
      padding-left: 2rem;
      border-left: 4px solid rgba(0, 223, 216, 0.5);
      font-size: 1.8rem;
      font-weight: 400;
      color: ${({ theme }) => theme.textColor || 'rgba(255, 255, 255, 0.85)'};
      opacity: 0;
      animation: fadeInUp 0.8s ease forwards;
      animation-delay: 0.6s;
      
      &::before {
        content: '';
        position: absolute;
        left: -4px;
        top: 0;
        height: 0;
        width: 4px;
        background: linear-gradient(to bottom, #00DFD8, transparent);
        animation: borderGrow 1s ease forwards;
        animation-delay: 1s;
      }
    }
  }

  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 5rem;
    padding-left: 1rem;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.8s;

    img, span {
      font-size: 3rem;
      width: 3.5rem;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      filter: grayscale(100%) brightness(80%);
      cursor: pointer;

      &:hover {
        transform: translateY(-5px) scale(1.1);
        filter: grayscale(0%) brightness(100%);
      }
    }
  }

  .button {
    margin-top: 5rem;
    padding: 1.6rem 6rem;
    font-size: 1.8rem;
    font-weight: 500;
    background: linear-gradient(
      45deg,
      rgba(76, 0, 255, 0.15) 0%,
      rgba(0, 223, 216, 0.15) 100%
    );
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 3rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    opacity: 0;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 1s;
    color: ${({ theme }) => theme.textColor || 'rgba(255, 255, 255, 0.85)'};
    text-decoration: none;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: linear-gradient(
        45deg,
        rgba(76, 0, 255, 0.25),
        rgba(0, 223, 216, 0.25)
      );
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: -1;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border: 1px solid rgba(255, 255, 255, 0.18);

      &::before {
        width: 100%;
      }
    }
  }

  .hero-image {
    position: relative;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
    animation-delay: 1.2s;

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 20px;
      background: radial-gradient(ellipse at center, rgba(0, 223, 216, 0.3) 0%, transparent 70%);
      filter: blur(10px);
    }

    img {
      max-width: 500px;
      filter: drop-shadow(0 0 50px rgba(0, 223, 216, 0.3));
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      animation: float 6s ease-in-out infinite;

      &:hover {
        transform: translateY(-10px) scale(1.02);
      }
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes borderGrow {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(-10deg);
    }
    80% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media(max-width: 960px) {
    display: block;
    margin-top: 15%;
    padding: 0 3rem;

    .hero-text {
      h1 {
        font-size: clamp(3rem, 8vw, 5rem);
      }

      p.small-resume {
        font-size: 1.6rem;
      }
      
      .datetime {
        font-size: 1.2rem;
      }
    }
    
    .hero-image {
      display: none;
    }

    .button {
      width: 100%;
      text-align: center;
    }
  }

  @media(max-width: 600px) {
    margin-top: 35%;
    
    .hero-text {
      h1 {
        font-size: clamp(2.5rem, 7vw, 4rem);
      }
      
      h3 {
        font-size: 1.8rem;
      }
      
      .greeting {
        font-size: 1.6rem;
      }
      
      .datetime {
        font-size: 1.1rem;
      }
    }

    .social-media {
      gap: 1.5rem;
      
      img, span {
        width: 3rem;
      }
    }
  }

  @media(max-width: 480px) {
    margin-top: 45%;
    padding: 0 2rem;
  }
`;