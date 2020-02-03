import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Block, Text } from '../../components';
import * as theme from '../../theme';
import helpers from '../../components/helpers';
import {useState, useEffect} from 'react';
import datacount from '../api/datacount';

const HomeScreen = () => {

  const [result, setResult] = useState(null);

  const getResult = async (id) => {
    const response = await datacount.get();
    setResult(response.data);
  };

  useEffect(() => {
    getResult();
  },[]);

  if(!result) {
    return null;
  }

  console.log();

  return  (
    <SafeAreaView style={styles.safe} forceInset={{ top: 'always' }}>
        {helpers.renderHeader(result.count.total_confirmed, result.count.total_deaths)}
        {helpers.renderArticles()}
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  bottomLine: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,
  },
});

export default HomeScreen;
