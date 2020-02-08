import React from 'react';
import helpers from '../../components/helpers';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet } from 'react-native';

const NewsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe} forceInset={{ top: 'always' }}>
      { helpers.renderAllArticles(navigation.getParam('articles'), navigation) }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#D61B1F',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

export default NewsScreen;
