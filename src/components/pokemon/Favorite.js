import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { useState, useEffect } from "react"
import {addPokemonFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite'

const Favorite = ({id}) => {

    const [isFavorite, setIsFavorite] = useState(undefined)
    const [reLoadCheck, setReLoadCheck] = useState(false)
    const Icon = isFavorite ? FontAwesome : FontAwesome5
    console.log(isFavorite)

    useEffect(() => {
        (async () => {
            try {
                const res = await isPokemonFavoriteApi(id)
                setIsFavorite(res)
            } catch (error) {
                isFavorite(false)
            }
        })()
    }, [id, reLoadCheck])

    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(id)
            onReloadCheckFavorite()
        } catch (error) {
            console.log(error)
        }
    }

    const removeFavorites = async () => {
        try {
            await removePokemonFavoriteApi(id)
            onReloadCheckFavorite()
        } catch (error) {
            console.log()
        }
    }

    const onReloadCheckFavorite = () => {
        setReLoadCheck((prev => !prev))
    }

    return (
        <Icon name='heart' color='#fff' size={20} onPress={isFavorite ? removeFavorites : addFavorite} style={{ marginRight: 20 }} />
    )
}

export default Favorite