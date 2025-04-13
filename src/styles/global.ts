import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Modern Color Palette */
    --pink: #FF0080;
    --black: #111827;
    --green: #00DFD8;
    --blue: #007CF0;
    --purple: #7928CA;
    --background-dark: #0F172A;
    --background-light: #F8FAFC;
    --text-dark: #94A3B8;
    --text-light: #1E293B;
    
    scroll-padding-top: 10rem;
    scroll-behavior: smooth;

    /* Light Theme */
    &.light {
      body {
        transition: all 0.3s ease-in-out;
        background-color: var(--background-light);
        color: var(--text-light);
      }

      .logo {
        color: var(--text-light);
        text-shadow: 0 0 20px rgba(0, 223, 216, 0.2);
      }

      header.header-fixed {
        transition: all 0.3s ease-in-out;
        background: rgba(248, 250, 252, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        a {
          transition: all 0.3s ease-in-out;
          color: var(--text-light);
          
          &:hover {
            color: var(--blue);
          }
        }

        .menu, .menu:before, .menu:after {
          background-color: var(--text-light);
        }

        .menu.active {
          background-color: transparent;
        }
      }

      footer.footer {
        transition: all 0.3s ease-in-out;
        background: rgba(0, 0, 0, 0.05);
        color: var(--text-light);
      }

      form {
        input, textarea {
          transition: all 0.3s ease-in-out;
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: var(--text-light);
          background: rgba(255, 255, 255, 0.9);
          
          &::placeholder {
            transition: all 0.3s ease-in-out;
            color: rgba(30, 41, 59, 0.6);
          }
          
          &:focus {
            border-color: var(--blue);
            box-shadow: 0 0 0 2px rgba(0, 124, 240, 0.1);
          }
        }
      }
    }
  }

  /* Reset Styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Base Styles */
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-dark);
    color: #FFFFFF;
    line-height: 1.6;
    transition: all 0.3s ease-in-out;
  }

  body, input, textarea, button {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in-out;
    
    &:hover {
      color: var(--green);
    }
  }

  /* Button Styles */
  button, .button {
    border: none;
    cursor: pointer;
    background: linear-gradient(
      45deg,
      var(--blue),
      var(--green)
    );
    color: #FFFFFF;
    border-radius: 2rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0, 223, 216, 0.3);
      filter: brightness(1.1);
    }

    &:active {
      transform: translateY(0);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }
  }

  /* Logo Style */
  .logo {
    font-size: 3rem;
    color: #FFFFFF;
    font-weight: 700;
    text-shadow: 0 0 20px rgba(0, 223, 216, 0.3);
    transition: all 0.3s ease-in-out;
    
    &:hover {
      text-shadow: 0 0 30px rgba(0, 223, 216, 0.5);
    }
  }

  /* Selection Style */
  ::selection {
    background: rgba(0, 223, 216, 0.2);
    color: #FFFFFF;
  }

  /* Scrollbar Style */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-dark);
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      45deg,
      var(--blue),
      var(--green)
    );
    border-radius: 4px;
    
    &:hover {
      background: linear-gradient(
        45deg,
        var(--green),
        var(--blue)
      );
    }
  }
`