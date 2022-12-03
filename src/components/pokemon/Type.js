import { StyleSheet, Text, View } from "react-native"
import { map, capitalize } from 'lodash'
import getColorsByPokemonType from '../../utils/getColorsByPokemonType'

const Type = ({types}) => {

    return (
        <View style={styles.content}>
            {map(types, (item, index) => (
                <View key={index} style={{...styles.pill, backgroundColor: getColorsByPokemonType(item.type.name)}}>
                    <Text style={{fontWeight: 'bold', color: '#fff', letterSpacing: 1}}>
                        {capitalize(item.type.name)}
                    </Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    }
})

export default Type