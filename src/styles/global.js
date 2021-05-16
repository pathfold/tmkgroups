import { css } from "@emotion/react";
import "@fontsource/quicksand"
import "@fontsource/catamaran"
import "@fontsource/comfortaa"

const globalStyles = css`
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: "catamaran";
    }

    * {
        box-sizing: border-box;
    }

    h1 {
        font-size: 3.5em;
        color: white;
        display: inline-block;

        @media(max-width: 1200px) {
            font-size: 3em;
        }

        @media(max-width: 600px) {
            font-size: 2.7em;
        }
    }

    h2 {
        font-size: 2rem;
        margin-bottom: .5rem;
        font-weight: lighter;
    }

    img {
        margin-bottom: 30px;
    }

    .header { 
        background-color: white;
        transition: .3s;
    }

    body.dark-header {
        .header { 
            background-color: black;
            transition: .3s;
            
            a, svg {
                color: white;
            }
        }
    }

    .specialHeader::before, .specialHeader::after {
        display: inline-block;
        content: "";
        border-top: 2px solid black;
        width: 450px;
        margin: 0 1rem;
        transform: translateY(-1rem);

        @media (max-width: 1350px){
            width: 250px;
        }

        @media (max-width: 1000px){
            width: 150px;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "catamaran";
    }

    p, img {
        margin-bottom: 0px;
    }
    

    .button {
        font-size: 13px;
        display: inline-block;
        margin: 20px 0px;

        button {
            color: white;
            text-shadow: none;
            text-decoration: none;
            background-image: none;
            padding: 15px 70px;
            border: none;
            background: black;
            border-radius: 30px;
            cursor: pointer;
            transition: 0.3s;
        }

        button:hover {
            background: #282b2b;
        }
    }
`

export default globalStyles;