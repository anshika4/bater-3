
import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ExchangeScreen from './screens/exchange';
import HomeScreen from './screens/home';
import WelcomeScreen from './screens/WelcomeScreen'

export default class App extends React.Component {
render(){
return (
<AppContainer/>
);
}
}

const TabNavigator=createBottomTabNavigator({
exchange:{screen:ExchangeScreen},
home:{screen:HomeScreen}
},
{
defaultNavigationOptions:({navigation})=>({
tabBarIcon: ()=>{
const routeName=navigation.state.routeName;
console.log (routeName);
if(routeName==='exchange'){
return(
<Image style={{width:40,height:40}} source={require('./assets/images.png')}/>
)
}else if(routeName==='home'){
return(
<Image style={{width:40,height:40}} source={require('./assets/images.png')}/>
)
}
}
})
}
);

const switchNavigator = createSwitchNavigator({
    WelcomeScreen:{screen: WelcomeScreen},
    BottomTab:{screen: TabNavigator}
  })
  
  const AppContainer =  createAppContainer(switchNavigator);