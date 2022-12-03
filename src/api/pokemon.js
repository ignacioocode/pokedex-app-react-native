import { API_HOST } from '../utils/constants'

export const getPokemonsApi = async (endPointUrl) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        const res = await fetch(endPointUrl || url)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getPokemonsDetailsByUrlApi = async (url) => {
    try {
        const res = await fetch(url)
        const data= await res.json()
        return data
    } catch (error) {
        throw error
    }
}

export const getPokemonDetailsApi = async (id) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const res = await fetch(url)
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}