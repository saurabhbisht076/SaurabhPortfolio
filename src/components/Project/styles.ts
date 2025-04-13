import styled from "styled-components";

export const Container = styled.section`
  margin-top: 15rem;
  
  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, #007CF0, #00DFD8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 2.5rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2.5rem 2rem;
      background: rgba(17, 25, 40, 0.75);
      border-radius: 1.6rem;
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      backdrop-filter: blur(16px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.125);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);

      &:hover {
        transform: translateY(-7px);
        background: linear-gradient(
          45deg,
          rgba(76, 0, 255, 0.15) 0%,
          rgba(0, 223, 216, 0.15) 100%
        );
        border: 1px solid rgba(255, 255, 255, 0.18);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #00DFD8;
        margin-bottom: 3.6rem;
        
        svg {
          filter: drop-shadow(0 0 8px rgba(0, 223, 216, 0.5));
        }

        .project-links {
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        a > img {
          width: 2.8rem;
          transition: transform 0.3s ease;
          &:hover {
            transform: scale(1.1);
            filter: brightness(1.2);
          }
        }
      }
      
      h3 {
        margin-bottom: 2rem;
        font-size: 2.2rem;
        background: linear-gradient(90deg, #fff, #00DFD8);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.85);
        
        a {
          color: #FFFF;
          border-bottom: 1px solid #00DFD8;
          transition: all 0.3s ease;
          &:hover {
            color: #00DFD8;
            padding-bottom: 0.2rem;
          }
        }
      }

      footer {
        margin-top: auto;
        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.2rem;
          font-size: 1.4rem;
          
          li {
            background: linear-gradient(
              45deg,
              rgba(76, 0, 255, 0.15) 0%,
              rgba(0, 223, 216, 0.15) 100%
            );
            padding: 0.6rem 1.2rem;
            border-radius: 0.8rem;
            color: #00DFD8;
            font-weight: 500;
            transition: all 0.3s ease;
            
            &:hover {
              transform: translateY(-2px);
              background: linear-gradient(
                45deg,
                rgba(76, 0, 255, 0.25) 0%,
                rgba(0, 223, 216, 0.25) 100%
              );
            }
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1.8rem;
    }
  }
`