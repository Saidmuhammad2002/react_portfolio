import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import HeroImg from '../assets/images/hero.png';
import Button from './Button';
import PText from './PText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: var(--white);
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: 15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
  @media only screen and (max-width: 576px) {
    .hero__heading .hero__name {
      font-size: 2.9rem;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello I am</span>
            <span className="hero__name">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 40,
                  delay: 90,
                  cursor: '_',
                }}
                onInit={(type) => {
                  type
                    .typeString('Saidmuhammad')
                    .typeString('<br/>Web Developer')
                    .pauseFor(500)
                    .deleteChars(13)
                    .typeString('Frontend Developer')
                    .pauseFor(500)
                    .deleteChars(18)
                    .typeString('React Developer')
                    .pauseFor(500)
                    .start();
                }}
              />
            </span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="hero img" />
          </div>
          <div className="hero__info">
            <PText>
              I am working as a freelance web designer and developer for 1
              years. I love to design and make new web experiences for the
              people.
            </PText>
            <Button btnLink="/projects" btnText="see my works" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/saidmuhammad.boboyev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.t.me//Said0130702"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TG
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/saidmuhammadboboyev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IN
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
