import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiShowAlt } from 'react-icons/bi';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    border: 3px solid var(--gray-2);
    position: relative;
    img {
      transition: transform 1s, filter 1s ease-in-out;
      filter: blur(0);
      transform: scale(1);
      height: 100%;
    }
    :hover {
      img {
        filter: blur(2px) brightness(40%);
        transform: scale(1.2);
      }
      .icons__link {
        transform: scale(1);
      }
    }
    .icons__link {
      transition: 1s;
      transform: scale(0);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      position: absolute;
      z-index: 1;
      a {
        width: 90%;
        height: 90%;
      }
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMomo Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    /* width: 90vw; */
    .projectItem__img {
      height: 350px;
    }
  }
  @media only screen and (max-width: 350px) {
    width: 90vw;
  }
`;
export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, numquam.',
  githubLink,
  demoLink,
}) {
  return (
    <ProjectItemStyle>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
        <div className="icons__link">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <AiOutlineGithub />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noreferrer">
              <BiShowAlt />
            </a>
          )}
        </div>
      </div>
      <div className="projectItem__info">
        <Link to="/projects">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
