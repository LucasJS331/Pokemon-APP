import { alert_toggle, clear_filter, filterPokemons, loadPokemons } from "./types"

export const actionHandler = (state, action)=>{
    
    if(action.type === loadPokemons){
        return {...state, pokemons: action.payload, isLoaded: true, max_pokemons: action.count}
    }

    if(action.type === filterPokemons){
        return {...state, filtered_pokemons: action.payload}
    }

    if(action.type === clear_filter){
        return {...state, filtered_pokemons: action.payload}
    }

    if(action.type === alert_toggle){
        return {...state, alert: action.payload}
    }

    return state;
}