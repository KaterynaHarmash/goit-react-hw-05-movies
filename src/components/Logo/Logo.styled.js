const { default: styled } = require('styled-components');

export const LogotypeContainer = styled.div`
  text-align: center;
`;
export const LogoTitle = styled.h1`
  color: #e74c3c;
  font-family: 'Cinzel', serif;
  font-weight: 300;
  font-size: 30px;
  line-height: 1.3;
  & strong {
    background: #e74c3c;
    color: #fff;
    display: inline-block;
    line-height: 1.8;
    padding: 0 16px;
  }
`;
