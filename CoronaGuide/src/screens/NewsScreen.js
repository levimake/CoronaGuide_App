import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import helpers from '../../components/helpers';
import SafeAreaView from 'react-native-safe-area-view';

const NewsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe} forceInset={{ top: 'always' }}>
      { helpers.renderAllArticles(navigation.getParam('articles'), navigation) }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default NewsScreen;
