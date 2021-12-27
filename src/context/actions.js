import axios from "axios";
import {alert_toggle, clear_filter, filterPokemons, loadPokemons } from "./types";

export const load_posts = async (dispach) =>{
  let {data} = await  axios.get("https://pokeapi.co/api/v2/pokemon?limit=1118&offset=0");

   data.results.sort((a,b)=> {
    if(b.name > a.name) return -1;

    if(b.name < a.name) return 1;

    return 0;

  })


  dispach({type: loadPokemons, payload: data.results, count: data.count});
  return;
  
}



export const filter_list = async (pokemons,search,dispach, max_pokemons) =>{

  let filtered_pokemons = pokemons.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  })


  if(filtered_pokemons.length === max_pokemons){
    dispach({type: clear_filter, payload: []});
    return;
  }
  dispach({type: filterPokemons, payload: filtered_pokemons});
  return;

}

export const clear_filter_list = async (dispach) =>{
  
  dispach({type: clear_filter, payload: []});
  return;

}

export const turn_off_alert = async (dispach) =>{
  
  dispach({type: alert_toggle, payload: false});
  return;

}