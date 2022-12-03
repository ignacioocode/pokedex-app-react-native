import { ScrollView } from 'react-native'
import { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/pokemon/Header'
import Type from '../components/pokemon/Type'
import Stats from '../components/pokemon/Stats'
import Favorite from '../components/pokemon/Favorite'
import useAuth from '../hooks/useAuth'

const Pokemon = ({ navigation, route: {params}}) => {

  const { auth } = useAuth()

  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const res = await getPokemonDetailsApi(params.id)
        setPokemon(res)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id}/>,
      headerLeft: () => <Icon name='arrow-left' color='#fff' size={20} style={{ marginLeft: 20 }} onPress={() => navigation.goBack()} />
    })
  }, [navigation, params, pokemon])

  if(!pokemon) return null

  return (
    <ScrollView>
     <Header 
      name={pokemon.name}
      order={pokemon.order}
      image={pokemon.sprites.other['official-artwork'].front_default}
      type={pokemon.types[0].type.name}
     />
     <Type types={pokemon.types}/>
     <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}

export default Pokemon