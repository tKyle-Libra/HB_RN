
import { createStackNavigator } from 'react-navigation'
import TabbarScreen from './tabbar'


export default createStackNavigator({
    Tabbar:{
        screen:TabbarScreen,
        navigationOptions:{
            header:null
        }
    }
});

