import {Contex} from './context';
import { useReducer} from 'react';
import { actionHandler } from './reducer';
import { data } from './data';
export const PokemonContext = ({children})=>{
    const [pokemons, dispach] = useReducer(actionHandler, data);
    

    return (
        <Contex.Provider value={{state: pokemons, dispach}}>
            {children}
        </Contex.Provider>
    )
}