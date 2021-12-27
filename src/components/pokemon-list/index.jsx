import { useContext, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import { clear_filter_list } from '../../context/actions';
import { Contex } from '../../context/context';
import { PokeButton } from '../button';
import { PokemonCard } from '../pokemon-card';

const Div = styled.div`
    width: 80%;
    margin: 50px auto;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    text-align: center;
    transition: all .5s ease-in-out;

    :hover{
        transform: scaleY(1);
    }

    @media screen and (max-width: 500px) {
        
        width: 100%;
        padding: .90em;
        margin: 12px auto;
        
  
    }
`
export const PokemonList = () => {
    const data = useContext(Contex);
    const [pokemons_list, setPokemons] = useState([]);
    const [poke_count, setPokeCount] = useState(15);

    //? filtered pokemons state
    const [filtered_pokemons, setFiltered] = useState([]);
    const [filtered_count, setFilteredCount] = useState(15);
    const {state,dispach} = data;
    const pokemons = state.pokemons;
    const filtered = state.filtered_pokemons;


    useEffect(()=>{
        setPokemons(pokemons.slice(0, poke_count));
        return ()=>{
            clear_filter_list(dispach);
        }
    },[dispach, pokemons, poke_count,])


    useEffect(()=>{
        setFiltered(filtered.slice(0, filtered_count));
    }, [filtered, filtered_count])

    const load_more = ()=>{
        setPokeCount((p)=> p + 15);

    }
    const load_more_filtered = ()=>{
        setFilteredCount((s)=> s + 15);

    }
   if(state.filtered_pokemons.length > 0 ){
    return(
        <>
            <p>Showing {filtered_pokemons.length} of  <b> {state.filtered_pokemons.length}</b> pokemons  results</p>
            <Div className='pokemon-grid'>
                {filtered_pokemons.map((poke, index)=>{
                    return (
                        <PokemonCard pokemon_url={poke.url} key={index} />
                    )
                })}

            </Div>

            

            {filtered_pokemons.length !== state.filtered_pokemons.length &&
                //se tem mais pokemons pra mostrar
                <PokeButton text='Show More' onClick={load_more_filtered} />
            }

            {filtered_pokemons.length === state.filtered_pokemons.length &&
                //caso nao tem mais pokemons para monstrar
                <p>No more results!</p>
            }
            
        </>
         
    )
   }
    return(
        <>
          <Div className='pokemon-grid'>
            {pokemons_list.map((poke, index)=>{
                return <PokemonCard pokemon_url={poke.url} key={index} />
            })}
           </Div>
         <PokeButton text='More Pokemons' onClick={load_more}/>
        </>
    )
      
}