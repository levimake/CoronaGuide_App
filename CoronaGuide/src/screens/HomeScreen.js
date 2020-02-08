import React from 'react';
import {StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import * as theme from '../../theme';
import helpers from '../../components/helpers';
import {useState, useEffect} from 'react';
import datacount from '../api/datacount';
import news from '../api/news';

const HomeScreen = ({navigation}) => {

  const [countResult, setCountResult] = useState(null);
  const [newsResult, setNewsResult] = useState(null);

  const getResult = async () => {
    const countResponse = await datacount.get();
    const newsResponse = await news.get();
    setCountResult(countResponse.data);
    setNewsResult(newsResponse.data);
  };

  useEffect(() => {
    getResult();
  },[]);

  if(!countResult || !newsResult) {
    return null;
  }

  console.log(newsResult.articles);


  return  (
    <SafeAreaView style={styles.safe} forceInset={{ top: 'always' }}>
        {helpers.renderHeader(countResult.count.total_confirmed, countResult.count.total_deaths,
                              countResult.count.total_recovered, navigation)}
        {helpers.renderArticles((newsResult.articles), navigation)}
        {helpers.renderAds()}
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
