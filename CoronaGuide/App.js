import React, { Component } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import DonateScreen from './src/screens/DonateScreen';
import LiveUpdatesScreen from './src/screens/LiveUpdatesScreen';
import DosandDontsScreen from './src/screens/DosandDontsScreen';
import NewsScreen from './src/screens/NewsScreen';
import SingleNewsScreen from './src/screens/SingleNewsScreen';
import * as theme from './theme.js';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
    headerMode: 'none',
  },
  Donate: {
    screen: DonateScreen,
    navigationOptions: {
      title: 'Donate To China',
      headerTintColor: '#ffffff',
      headerStyle: { backgroundColor: theme.colors.primary },
      headerTitleStyle: { color: theme.colors.white, fontSize: theme.sizes.h3, },
    }
  },
  LiveUpdates: {
    screen: LiveUpdatesScreen,
    navigationOptions: {
      title: 'Live Updates',
      headerTintColor: '#ffffff',
      headerStyle: { backgroundColor: theme.colors.primary },
      headerTitleStyle: { color: theme.colors.white, fontSize: theme.sizes.h3, },
    }
  },
  DosandDonts: {
    screen: DosandDontsScreen,
    navigationOptions: {
      title: 'Dos and Donts',
      headerTintColor: '#ffffff',
      headerStyle: { backgroundColor: theme.colors.primary },
      headerTitleStyle: { color: theme.colors.white, fontSize: theme.sizes.h3, },
    }
  },
  News: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'Latest News',
      headerTintColor: '#ffffff',
      headerStyle: { backgroundColor: theme.colors.primary },
      headerTitleStyle: { color: theme.colors.white, fontSize: theme.sizes.h3, },
    }
  },
  SingleNews: {
    screen: NewsScreen,
    navigationOptions: {
      headerShown: 'false',
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
    adLoaded: false,
  };

  loadingFonts = async() => {
    await Font.loadAsync({
      "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
      "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
      "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf")
    });
  }

  async componentDidMount() {
    this.loadingFonts();
    this.setState({ fontLoaded: true });
    console.log("ads loaded");
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
