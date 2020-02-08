import React from 'react';
import {useState, useEffect} from 'react';
import datacount from '../api/datacount';
import {StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import helpers from '../../components/helpers';

const LiveUpdatesScreen = () => {

  const [countResult, setCountResult] = useState(null);

  const getResult = async () => {
    const countResponse = await datacount.get();
    setCountResult(countResponse.data);
  };

  useEffect(() => {
    getResult();
  },[]);

  if(!countResult) {
    return null;
  }


  return (
    <SafeAreaView style={styles.safe} forceInset={{ top: 'always' }}>
        { helpers.renderLiveUpdates(countResult.count.total_confirmed, countResult.count.total_deaths, countResult.count.total_recovered) }
        { helpers.renderCountryUpdates(countResult.count_by_country) }
        { helpers.renderAds() }
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
})

export default LiveUpdatesScreen;
