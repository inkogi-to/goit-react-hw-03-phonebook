import {createGlobalStyle} from 'styled-components'
import styled from 'styled-components'
import 'modern-normalize'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #e5e5e5
  }

  p, ul, h1, h2, h3, h4, h5, h6,button {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }


  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

`
export const Container = styled.div`
  margin: 20px auto 0 auto;
  width: 600px;
  height: 600px;
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  background-color: rgba(225, 139, 139, 0.65);
`
export const TitlePhonebook = styled.h1`
  text-align: center;
  font-weight: bold;
  color: #ffffff;

`
export const TitleContacts = styled.h2`
  text-align: center;
  font-weight: bold;
  margin: 40px 0 20px;
  color: #ffffff;

`
