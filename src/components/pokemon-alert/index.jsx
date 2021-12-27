import propTypes from 'prop-types';
import { useContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import { turn_off_alert } from '../../context/actions';
import { Contex } from '../../context/context';

const Alert = styled.p`
    {
       position: fixed;
       left: 100px;
       top: 300px;
       animation: alert 4s;
       opacity: 0;
       padding: .75em;
       background-color: black;
       color: white;
       border-radius: 5px;
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

    @keyframes alert-mobile{
        0%{
            opacity: 0;
        }


        30%{
            opacity: 1;
        }


        60%{
            opacity: 1;
        }

        90%{
            opacity: 1;
        }

        100%{
            opacity: 0;
        }

    }

    @media screen and (max-width: 500px) {
        {
            left: 45px;
            top: 0;
            animation: alert-mobile 4s;
        }
  
    }

`

export const PokemonAlert = ({text})=>{
    const data = useContext(Contex);
    const {state, dispach} = data;
    

    useEffect(()=>{
        
        setTimeout(() => {
            turn_off_alert(dispach);
        }, 5000);

    },[dispach])

    

    return (
        <>
            {state.alert && 
                <Alert>{text}</Alert>
            }
        </>
    )
    
}

PokemonAlert.propTypes = {
    text: propTypes.string.isRequired
}
