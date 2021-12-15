import { createGlobalStyle } from 'styled-components'

//template literals
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

    //REM = 1rem = font-size
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
`