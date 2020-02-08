import React from 'react';
import {useState, useEffect} from 'react';
import dosAndDonts from '../api/dosAndDonts';
import SafeAreaView from 'react-native-safe-area-view';
import helpers from '../../components/helpers';
import { StyleSheet } from 'react-native';



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
    backgroundColor: 'white',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
})

export default DosandDontsScreen;
