import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AccountNavigation from './AccountNavigation'
import FavoriteNavigation from './FavoriteNavigation'
import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator initialRouteName='Pokedex'>
            <Tab.Screen name='Favorite' component={FavoriteNavigation} options={{
                tabBarLabel: 'Favoritos',
                tabBarIcon: ({color, size}) => (
                    <Icon name='heart' color={color} size={size} />
                )
            }}/>
            <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
                tabBarLabel: '',
                tabBarIcon: () => (renderPokedex())
            }} />
            <Tab.Screen name='Account' component={AccountNavigation} options={{
                tabBarLabel: 'Mi cuenta',
                tabBarIcon: ({color, size}) => (
                    <Icon name='user' color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
    )
}

const renderPokedex = () => {
    return (
        <Image
            style={{width: 75, height: 75, top: -15}} 
            source={require('../assets/pokeball.png')} 
        />
    )
}

export default Navigation