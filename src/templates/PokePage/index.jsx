import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { PokeButton } from "../../components/button";
import { Loading } from "../../components/loading";
import { PokemonAlert } from "../../components/pokemon-alert";
import { PokemonSprite } from "../../components/pokemon-sprites";

export const PokePage = ()=>{
    const params = useParams();
    const [pokemon, setPokemon] = useState({});
    const [default_sprite, setDefaultSprite] = useState(true);
    const [shiny_sprite, setShinySprite] = useState(true);
    

    useEffect(()=>{
        async function getPoke(){
          let {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
          setPokemon(data);
          return data;
        }

        getPoke();
    },[params.name])

    const handle_default_sprite = ()=>{
       
        if(default_sprite){
            return pokemon.sprites.front_default;
        } else{
            return pokemon.sprites.back_default;
        }
    }

    const handle_shiny_sprite = ()=>{
       
        if(shiny_sprite){
            return pokemon.sprites.front_shiny;
        } else{
            return pokemon.sprites.back_shiny;
        }
    }
    
    if(pokemon.name === undefined){
        return <Loading/>
    }
    return (
            <PokemonSprite>
                <PokemonAlert text={"🌟You can swipe the images!"}/>
                <h2 className="pokemon-sprites-title">{pokemon.name}</h2>

                <div className="poke-sprites-container">
                    <article>
                        <h2>Default</h2>
                        <img className="poke-sprite" src={handle_default_sprite()} onClick={()=> setDefaultSprite(!default_sprite)} alt={pokemon.name}/>
                    </article>

                    <article>
                        <h2>Shiny</h2>
                        <img className="poke-sprite" src={handle_shiny_sprite()} alt={pokemon.name} onClick={()=> setShinySprite(!shiny_sprite)}/>
                    </article>
                </div>
                <Link to={'/'}> 
                    <PokeButton text={"🏠 Back to Home"}/>
                </Link>

            </PokemonSprite>
          
            
    )
}