import { StyleSheet, Text, View } from "react-native"
import { map, capitalize } from 'lodash'

const Stats = ({stats}) => {

    const barStyles = (num) => {
        return {
            backgroundColor: num > 49 ? '#2ab' : '#f66',
            width: `${num}%`
        }
    }

    return (
        <View style={styles.content}>
            <Text style={styles.title}>Base Stats</Text>
            {map(stats, (item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyles(item.base_stat)]}/>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 50,
        marginBottom: 70
    },
    title: {
        color: '#444',
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 10,
        letterSpacing: 2,
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5
    },
    blockTitle: {
        width: '30%'
    },
    statName: {
        fontSize: 12,
        color: '#666'
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    number: {
        width: '12%',
        fontSize: 12
    },
    bgBar: {
        backgroundColor: '#dedede',
        width: '88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden'
    },
    bar: {
        backgroundColor: '#f00',
        width: '100%',
        height: 5,
        borderRadius: 20,
    }
})

export default Stats