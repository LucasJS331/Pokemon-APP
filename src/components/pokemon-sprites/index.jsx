import styled from "styled-components";

export const PokemonSprite = styled.div`
    .pokemon-sprite-alert{
       position: fixed;
       left: 100px;
       top: 300px;
       animation: alert 4s;
       opacity: 0;
    }
    {
        width: 50%;
        margin: 65px auto;
        text-align: center;
    }
    .pokemon-sprites-title{
        letter-spacing: 5px;
        color: green;
        text-transform: uppercase;
        margin: 10px 0;

    }
    .poke-sprites-container{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
        text-align: center;
    }

    .poke-sprite{
        width: 90%;
    }

    @keyframes alert{
        0%{
            transform: translateX(-30px);
            opacity: 1;
        }


        30%{
            transform: translateX(0);
            opacity: 1;
        }


        60%{
            transform: translateX(-30px);
            opacity: 1;
        }

        90%{
            opacity: 1;
        }

        100%{
            transform: translateX(0);
            opacity: 0;
        }
    }

    @media screen and (max-width: 500px) {
        {
            width: 75%;
        }
  
    }


`