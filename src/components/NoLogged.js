import { StyleSheet, View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

const NoLogged = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver esta pantalla tienes que iniciar sesión</Text>
            <Button title="ir al login" onPress={() => navigation.navigate('Account')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginVertical: 50,
        marginHorizontal: 50
    },
    text: {
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    }
})

export default NoLogged