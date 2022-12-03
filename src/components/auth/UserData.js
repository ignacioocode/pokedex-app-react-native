import {StyleSheet, Text, View, Button } from "react-native"
import { useState, useCallback } from "react"
import { useFocusEffect} from '@react-navigation/native'
import { size } from 'lodash'
import useAuth from '../../hooks/useAuth'
import { getPokemonFavoriteApi } from '../../api/favorite'

const UserData = () => {

    const { auth, logout } = useAuth()
    const [total, setTotal] = useState(0)

    useFocusEffect(
        useCallback(() => {
            (async () => {
                try {
                    const res = await getPokemonFavoriteApi()
                    setTotal(size(res))
                } catch (error) {
                    setTotal(0)
                }
            })()
        }, [])
    )

    return (
        <View style={styles.content}>
            <View style={styles.titleBlck}>
                <Text style={styles.title}>Bienvenido</Text>
                <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
            </View>
            <View style={styles.dataContent}>
                <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
                <ItemMenu title='Username' text={`${auth.username}`} />
                <ItemMenu title='Email' text={`${auth.email}`}/>
                <ItemMenu title='Total Favoritos' text={`${total} Pokemons`} />
            </View>
            <Button title='cerrar sessión' onPress={logout} style={styles.button} />
        </View>
    )
}

const ItemMenu = ({title, text}) => {
    return (
        <View style={styles.itemMenu}>
            <Text style={styles.itemMenuTitle}>{title}: </Text>
            <Text>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginHorizontal: 20,
        marginTop: 20
    },
    titleBlck: {
        marginBottom: 30
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    },
    dataContent: {
        marginButton: 20
    },
    itemMenu: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: '#666'
    },
    itemMenuTitle: {
        fontWeight: 'bold',
        paddingRight: 10,
        width: 120
    },
    button: {
        paddingTop: 50
    }
})

export default UserData