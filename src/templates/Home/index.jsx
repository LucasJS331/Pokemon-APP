import { PokemonList} from '../../components/pokemon-list';
import { useContext, useEffect} from 'react';
import { SearchInput } from '../../components/search-input';
import { Loading } from '../../components/loading';
import { Contex } from '../../context/context';
import { load_posts } from '../../context/actions';
import styled from 'styled-components';

export const PokeContainer = styled.div`
  text-align: center;

`

export const Home = ()=>{

    const data = useContext(Contex);
    const {state,dispach} = data;

    useEffect(()=>{
      load_posts(dispach);
    }, [dispach])



    if(!state.isLoaded){
      return <Loading/>
    }

    if(state.pokemons.length === 0){
      return (
        <PokeContainer>
          <SearchInput />
          <p>Pokemon não encontrado</p>
        </PokeContainer>
      )
    }

  
  return (
      <PokeContainer>
        <SearchInput />
        <PokemonList />
      </PokeContainer>
  )
}

