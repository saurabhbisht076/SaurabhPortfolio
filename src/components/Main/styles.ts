import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  z-index: 0;
  padding: 0 10rem;
  overflow-x: hidden;
  min-height: 100vh;
  background: linear-gradient(
    170deg,
    rgba(17, 25, 40, 0.97) 0%,
    rgba(17, 25, 40, 0.95) 100%
  );

  /* Particles container */
  #tsparticles {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    animation: fadeIn 1s ease-in;
  }

  /* Optional: Add a subtle gradient overlay */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(0, 124, 240, 0.03) 0%,
      rgba(0, 223, 216, 0.03) 100%
    );
    pointer-events: none;
    z-index: -1;
  }

  /* Optimize performance */
  * {
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Add a subtle scroll animation */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Responsive design */
  @media (max-width: 740px) {
    padding: 0 4rem;
  }

  @media (max-width: 360px) {
    padding: 0 2rem;
  }

  /* Optional: Add smooth scrolling */
  scroll-behavior: smooth;

  /* Optional: Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(17, 25, 40, 0.95);
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      45deg,
      rgba(0, 124, 240, 0.5),
      rgba(0, 223, 216, 0.5)
    );
    border-radius: 4px;
    
    &:hover {
      background: linear-gradient(
        45deg,
        rgba(0, 124, 240, 0.7),
        rgba(0, 223, 216, 0.7)
      );
    }
  }
`