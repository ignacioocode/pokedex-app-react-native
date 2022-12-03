import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation} from '@react-navigation/native'
import getColorsByPokemonType from '../utils/getColorsByPokemonType'
import { capitalize } from 'lodash'

const PokemonCard = ({pokemons}) => {
    const navigation = useNavigation()

    const pokemonColor = getColorsByPokemonType(pokemons.type)
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles }

    const goToPokemon = () => {
        navigation.navigate('Pokemon', {id: pokemons.id})
    }

    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>{`${pokemons.order}`.padStart(2, 0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemons.name)}</Text>
                        <Image style={styles.image} source={{uri: pokemons.image}}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bg: {
        backgroundColor: 'grey'
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11,
    },
    name: {
        color: '#fff',
        fontWeight: ' bold',
        fontSize: 15,
        paddingTop: 10
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90,
    }
})

export default PokemonCard