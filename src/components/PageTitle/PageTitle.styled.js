import styled from 'styled-components';

export const StyledPageTitle = styled.h2`
  display: inline;
  position: relative;
  padding: 0;
  margin: 0;
  font-family: 'Raleway', sans-serif;
  color: #fff;
  -webkit-transition: all 0.4s ease 0s;
  -o-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
  white-space: nowrap;
  padding-bottom: 13px;
  z-index: 1;
  max-width: fit-content;
  &:before {
    background-color: #e74c3c;
    content: '';
    display: block;
    height: 3px;
    width: 75px;
    margin-bottom: 5px;
  }
  &:after {
    background-color: #e74c3c;
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3px;
    width: 75px;
    margin-bottom: 0.25em;
  }
`;
