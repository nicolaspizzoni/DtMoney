// import styled from 'styled-components'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global"

// const Title = styled.h1`
//   color: #8257e6;
//   font-size: 64px;

//   /*encadeamento igual ao sass*/
//   /* button {
//     background: #8257e6;
//   } */
// `

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}