//import './assets/css/style.css';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Button = styled.button`
    border: 0;
    padding: 1em;
    color: white;
    border-radius: 5px;
    background-color: rgb(28, 187, 81);
    transition: all .3s ease-in-out;
    margin-bottom: 15px;

    :hover{
        background-color: rgb(7, 131, 48);
    }
`
export const PokeButton = ({text, onClick})=>{
    return <Button onClick={onClick ? onClick : undefined}>{text}</Button>
}


PokeButton.propTypes = {
    text: propTypes.string.isRequired
}