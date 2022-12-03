import { StyleSheet, FlatList, ActivityIndicator, Platform } from "react-native"

import PokemonCard from "./PokemonCard"

const PokemonList = ({ pokemons, loadPokemons, isNext }) => {

    const loadMore = () => {
        loadPokemons()
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(pokemon) => String(pokemon.id)}
            renderItem={({item}) => <PokemonCard pokemons={item}/>}
            contentContainerStyle={styles.flatListContetContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.2}
            ListFooterComponent={
                isNext && (
                    <ActivityIndicator size='large' style={styles.spinner} color='#aeaeae'/>
                )
            }
        />
    )
}

const styles = StyleSheet.create({
    flatListContetContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.OS === 'android' ? 90 : 60
    }
})

export default PokemonList