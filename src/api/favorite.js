import AsyncStorage from '@react-native-async-storage/async-storage'
import { includes, pull} from 'lodash'
import { FAVORITE_STORAGE } from '../utils/constants'

export const getPokemonFavoriteApi = async () => {
    try {
        const res = await AsyncStorage.getItem(FAVORITE_STORAGE)
        return JSON.parse(res || [])
    } catch (error) {
        
    }
}

export const addPokemonFavoriteApi = async (id) => {
    try {
        const favorites = await getPokemonFavoriteApi()
        favorites.push(id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
    } catch (error) {
        throw error
    }
}
export const isPokemonFavoriteApi = async (id) => {
    try {
        const res = await getPokemonFavoriteApi()
        return includes(res, id)
    } catch (error) {
        throw error
    }
}

export const removePokemonFavoriteApi = async (id) => {
    try {
        const favorites = await getPokemonFavoriteApi()
        const newFavorites = pull(favorites, id)
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(newFavorites))
    } catch (error) {
        throw error
    }
}