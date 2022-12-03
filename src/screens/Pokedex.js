import { SafeAreaView } from "react-native"
import { useState, useEffect } from "react"
import { getPokemonsApi, getPokemonsDetailsByUrlApi } from "../api/pokemon"
import PokemonList from "../components/PokemonList"

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState(null)

    useEffect(() => {
        (async () => {
            await loadPokemons()
        })()
    }, [])

    const loadPokemons = async () => {
        try {
            const res = await getPokemonsApi(nextUrl)
            setNextUrl(res.next)

            const pokemonsArray = []

            for await (const pokemon of res.results) {
                const pokemonDetails = await getPokemonsDetailsByUrlApi(pokemon.url)

                pokemonsArray.push({
                    id: pokemonDetails.id,
                    name: pokemonDetails.name,
                    type: pokemonDetails.types[0].type.name,
                    order: pokemonDetails.order,
                    image: pokemonDetails.sprites.other['official-artwork'].front_default
                })
            }

            setPokemons([...pokemons, ...pokemonsArray])

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <SafeAreaView>
            <PokemonList 
                pokemons={pokemons} 
                loadPokemons={loadPokemons} 
                isNext={nextUrl}
            />
        </SafeAreaView>
    )
}

export default Pokedex