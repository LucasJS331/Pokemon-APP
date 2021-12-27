import axios from "axios"
import { useCallback, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import styled from "styled-components";
import propTypes from 'prop-types';


const Article = styled.article`
    border: 1px solid rgb(240, 223, 223);
    border-radius: 5px;
    transition: all .3s ease-in-out;
    box-shadow: 4px 6px 23px 1px rgba(0, 0, 0, 0.226);
    padding: .50em;

    :hover{
        transform: scale(1.05);
    }

    img{
        width: 50%;
        height: 60%;
    }

    .poke-title{
        margin: 0;
        color: rgba(8, 112, 39, 0.76);
        transition: color .3s ease-in-out;
        letter-spacing: 4px;
    }

    .poke-title:hover{
        color: rgba(6, 163, 53, 0.774);
    }

`

export const PokemonCard = ({pokemon_url})=>{
    const [poke_info, setPokeInfo]= useState({});
    const [current_sprite, setSprite] = useState(true);



    const load_poke = useCallback(async ()=>{
        let poke =  (await axios.get(pokemon_url)).data
       
        setPokeInfo({
            name: poke.name,
            id: poke.id,
            sprite_f: poke.sprites.front_default,
            sprite_b: poke.sprites.back_default
        });

    },[pokemon_url])

    const handle_sprite = ()=>{
        if(!current_sprite){
            return poke_info.sprite_b
        }

        return poke_info.sprite_f;

    }
    useEffect(()=>{
        load_poke()
    }, [load_poke])
    return(
        
        <>
        {poke_info.sprite_b && 
            <Link to={`/pokemon/${poke_info.name}`}>
                <Article className="poke-article" >
                    <img src={handle_sprite()} alt={poke_info.name} onClick={()=> setSprite(!current_sprite)} />
                    <h2 onClick={()=> setSprite(!current_sprite)} className="poke-title">{poke_info.name}</h2>
                </Article>
            </Link>
        }
        </>
       
    )
}

PokemonCard.propTypes = {
    pokemon_url: propTypes.string.isRequired
}