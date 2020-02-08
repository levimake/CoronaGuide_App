import React, { Component } from 'react';
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
import { StyleSheet } from 'react-native';
import { Block, Text } from './components';

class SplashScreen extends React.Component {
  render() {

    return (
      <Block middle color="primary" style={ styles.container } flex={1}>
        <Block left column flex={1} middle style={{ paddingHorizontal: 20, justifyContent: 'center',  }}>
          <Text h1 color="white" style={{ letterSpacing: 1 }}>Stay Safe</Text>
          <Text h2 light color="white" style={{ letterSpacing: 1 }}>From</Text>
          <Text h1 bold color="white" style={{ letterSpacing: 1 }}>Coronavirus</Text>
        </Block>
        <Block center middle row flex={0.2} style={{ paddingHorizontal: 20 }}>
          <Text h3 light color="white" style={{ textAlign: 'center', letterSpacing: 3 }}>FROM  LEVIMAKE</Text>
        </Block>
      </Block>
    );
  }
}

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
    screen: SingleNewsScreen,
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

  constructor(props) {
  super(props);

  this.state = { isLoading: true }
}

performTimeConsumingTask = async() => {
  return new Promise((resolve) =>
    setTimeout(
      () => { resolve('result') },
      2000
    )
  );
}

async componentDidMount() {
  // Preload data from an external API
  // Preload data using AsyncStorage
  const data = await this.performTimeConsumingTask();

  if (data !== null) {
    this.setState({ isLoading: false });
  }
}


  render() {

    if (this.state.isLoading) {
      return <SplashScreen />;
    }

        return (
          <SafeAreaProvider>
            <RootApp />
          </SafeAreaProvider>
        );

  }

}

const styles = StyleSheet.create({
    container: {

    }
})
