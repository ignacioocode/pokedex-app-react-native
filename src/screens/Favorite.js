import { useFocusEffect } from '@react-navigation/native'
import { useState, useCallback } from "react"
import { getPokemonFavoriteApi } from '../api/favorite'
import { getPokemonDetailsApi } from "../api/pokemon"
import useAuth from '../hooks/useAuth'
import PokemonList from "../components/PokemonList"
import NoLogged from "../components/NoLogged"

const Favorite = () => {

    const [pokemon, setPokemon] = useState([])
    
    const { auth } = useAuth()

    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    const res = await getPokemonFavoriteApi()

                    const pokemonsArray = []
                    for await (const id of res) {
                        const pokemonDetails = await getPokemonDetailsApi(id)

                        pokemonsArray.push({
                            id: pokemonDetails.id,
                            name: pokemonDetails.name,
                            type: pokemonDetails.types[0].type.name,
                            order: pokemonDetails.order,
                            image: pokemonDetails.sprites.other['official-artwork'].front_default
                        })
                    }
                    setPokemon(pokemonsArray)
                })()
            }
        }, [auth])
    )



    return  !auth ?( <NoLogged />) : (<PokemonList pokemons={pokemon}/>)
}

export default Favorite