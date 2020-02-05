import React from 'react';
import {useState, useEffect} from 'react';
import dosAndDonts from '../api/dosAndDonts';
import {View, StyleSheet, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Block, Text } from '../../components';
import * as theme from '../../theme';
import helpers from '../../components/helpers';


const DosandDontsScreen = () => {

  const [dosAndDontsResult, setdosAndDontsResult] = useState(null);

  const getResult = async () => {
    const dosAndDontsResponse = await dosAndDonts.get();
    setdosAndDontsResult(dosAndDontsResponse.data);
  };

  useEffect(() => {
    getResult();
  },[]);

  if(!dosAndDontsResult) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safe} forceInset={{ top: 'always' }}>
      { helpers.renderDosAndDonts(dosAndDontsResult.dos_and_donts) }
      { helpers.renderAds() }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
})

export default DosandDontsScreen;
