import pokebola from './assets/img/pokebola.jpg';
import { Link } from 'react-router-dom';
import { PokeButton } from '../../components/button';
import styled from 'styled-components';

export const NotFound = styled.div`
    {
        width: 60%;
        margin: 90px auto 0 auto;
        text-align: center;
    }

    img{
        width: 40%;
    }

    p{
        margin: 10px;
    }

    @media screen and (max-width: 500px) {
        {
            width: 95%;
        }
  
    }

`
export const  NotFoundPage = ()=>{
    return (
        <NotFound>
            <img src={pokebola} alt="pokemon not found" />
            <p>Page not found</p>

            <Link to={'/'}>
                <PokeButton text={"🏠 Go to HomePage"}/>
            </Link>
        </NotFound>
    )
} 