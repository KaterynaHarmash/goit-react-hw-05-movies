import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #222;
  }
  ul {
    list-style-type: none;
  }
  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 60px);
    
  }
  
`;
