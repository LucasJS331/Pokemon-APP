import { useContext, useState } from 'react';
import styled from 'styled-components';
import { filter_list } from '../../context/actions';
import { Contex } from '../../context/context';

const Input = styled.input`
    border: 1px solid rgb(187, 196, 190);
    border-radius: 10px;
    padding: 1em;
    display: inline-block;
    width: 30%;
    margin: 30px 0 30px 0;
    outline: none;
    transition: all .5s ease-in-out;

    :hover{
        border: 1px solid rgb(49, 228, 123);
    }

    @media screen and (max-width: 500px) {
        {
            width: 75%;
        }
  
    }
}

`

export const  SearchInput = ()=>{
    const [searh_value, setSearchValue] = useState('');

    const data = useContext(Contex);
    const {state,dispach} = data;
    const handleValue = (e)=>{
        const search = e.target.value;
        setSearchValue(search);
        filter_list(state.pokemons, search, dispach, state.max_pokemons);
    }
    return (
        <>
        <Input placeholder="Search here..." className='search-input' onChange={handleValue}/>
        <p className='search-text'>{searh_value}</p>
        </>
    )
}