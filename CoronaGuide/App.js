import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
    headerMode: 'none',
  },

},
  {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
      title: null
  }
});

const RootApp = createAppContainer(MainNavigator);

export default class App extends Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
    });

    this.setState({ fontLoaded: true });
  }

  render() {

      if(!this.state.fontLoaded) {
        return <AppLoading />
      }

      else {
        return (
          <SafeAreaProvider>
            <RootApp />
          </SafeAreaProvider>
        );
      }

  }

}
