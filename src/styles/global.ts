import { createGlobalStyle } from 'styled-components'

//template literals ``
export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;

        --blue-light: #6933FF;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;

        /*desconsidera valores de padding como tamanho da caixa*/
        box-sizing: border-box;
    }

    html {
        /* tela até 1080px */
        @media (max-width: 1080px){
            /*porcentagem porque se adequa ao aparelho e preferencias do usuário*/
            font-size: 93.75%; 
        }

        /* tela até 720px */
        @media (max-width: 720px){
            /*porcentagem porque se adequa ao aparelho e preferencias do usuário*/
            font-size: 87.5%;
        }
    }

    //REM = 1rem = font-size => 16px
    //com as porcentagens o rem vai diminuindo conforme a tela for menor

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--background);
        position: relative;
        padding: 3rem;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8)
        } 
    }
`