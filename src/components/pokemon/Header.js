import { StyleSheet, View, SafeAreaView, Text, Image} from "react-native"
import { capitalize } from 'lodash'
import getColorByPokemonType from '../../utils/getColorsByPokemonType'

const Header = ({name, order, image, type}) => {

    const color = getColorByPokemonType(type)
    const bgStyles = [{backgroundColor: color, ...styles.bg}]
    return (
        <>
            <View style={bgStyles}/>

            <SafeAreaView style={styles.content}>
                <View style={styles.header}>
                    <Text style={styles.name}>{capitalize(name)}</Text>
                    <Text style={styles.order}>#{`${order}`.padStart(2, 0)}</Text>
                </View>
                <View style={styles.contentImg}>
                    <Image source={{uri: image}} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: 380,
        position: 'absolute',
        borderBottomEndRadius: 300,
        borderBottomStartRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    name: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 27,  
      letterSpacing: 2
    },
    order: {
        color: '#fff',
        fontWeight: 'bold'
    },
    contentImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top: 30
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    }
})

export default Header