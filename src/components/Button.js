import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RubberBand from 'react-reveal/RubberBand';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    box-shadow: 0px 6px ${(props) => (!props.outline ? '#444' : '#bbb')};
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'trasparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
    &:hover,
    &:active {
      box-shadow: 0 2px ${(props) => (!props.outline ? '#333' : '#ccc')};
      transform: translateY(4px);
    }
    @media only screen and (max-width: 768px) {
      .button {
        font-size: 1.8rem;
      }
    }
  }
`;
export default function Button({
  btnLink = 'test',
  btnText = 'test',
  outline = false,
}) {
  return (
    <RubberBand>
      <ButtonStyle className="batton-wrapper" outline={outline}>
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      </ButtonStyle>
    </RubberBand>
  );
}
