import {Block, Text, ArticlesDetail} from '../components';
import React from 'react';
import {StyleSheet,
        ScrollView, FlatList, View,
        TouchableOpacity, Image} from 'react-native';
import { AdMobBanner, setTestDeviceIDAsync} from 'expo-ads-admob';


const helpers = {
  renderHeader: function(confirmed, deaths, recovered, navigation) {
    return (
    <Block column flex={0.36} style={{ paddingHorizontal: 15, }}>
      <Block flex={false} row style={{ paddingVertical: 15, }}>
        <Block center>
          <Text h3 white>Stay Safe From Corona</Text>
        </Block>
      </Block>

      <Block card shadow color="white" style={styles.header}>

        <Block row space="between" style={{ paddingHorizontal: 30, }}>
            <Block flex={false} row center >
              <Text h2 semibold>{confirmed}</Text>
            </Block>
            <Block flex={false} row center style={{ marginLeft: -20 }}>
              <Text h2 primary semibold>{deaths}</Text>
            </Block>
            <Block flex={false} row center>
              <Text h2 color="#2E8B57" semibold>{recovered}</Text>
            </Block>
        </Block>

        <Block flex={0.25} center row space="between" style={{ paddingHorizontal: 30, marginTop: 25, marginBottom: 20,}}>
          <Text caption light>Confirmed</Text>
          <Text caption light>Deaths</Text>
          <Text caption light>Recovered</Text>
        </Block>
      </Block>

      <Block flex={0.25} center row space="between" style={{ marginBottom:20, marginTop: 17, }}>
        <Block card1 shadow color="tertiary" style={{ marginTop:10, paddingHorizontal: 10, paddingVertical: 7,  }}>
          <Block flex={0.25} center row space="between" style={{ paddingHorizontal: 5, marginTop: 25, marginBottom: 20,}}>

              <TouchableOpacity onPress={() => navigation.navigate("LiveUpdates")} style={{flex:0.5}}>
                <Text color="white" caption semibold style={{ textAlign: 'center', }}>Live Updates</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("Donate")} style={{flex:0.5}}>
              <Text color="white" caption semibold style={{ textAlign: 'center', }}>Donate To China</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("DosandDonts")} style={{flex:0.5}}>
                <Text color="white" caption semibold style={{ textAlign: 'center', }}>Dos and Donts</Text>
              </TouchableOpacity>

          </Block>
        </Block>
      </Block>

    </Block>


  )
  },

  renderArticle: function(item) {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <Block row card shadow color="white" style={styles.article}>
          <Block flex={0.5}>
            <Image style={styles.image} source={{ uri: item.urlToImage }} />
          </Block>
          <Block flex={2} column middle>
            <Text>{item.title}</Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  },


  renderArticles: function(articles) {

    return(

      <Block column flex={0.8} color="gray2" style={styles.articles}>

        <Block row space="between" style={{ paddingHorizontal: 20, marginBottom: -10 }}>
          <Text light>Latest News</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text semibold>View All</Text>
          </TouchableOpacity>
        </Block>

        <Block row flex={8.0}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={articles}
          renderItem={({ item }) =>
              this.renderArticle(item)
          }
          keyExtractor={item => item.url}
          />
        </Block>

      </Block>
    );
  },

  renderAds: function() {
    return (
      <AdMobBanner
      bannerSize="fullBanner"
      adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
      servePersonalizedAds // true or false
      onDidFailToReceiveAdWithError={this.bannerError} />
    );
  }

}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingVertical: 45,
    zIndex: -1,
  },
  articles: {
      marginTop: -5,
      paddingTop: 55,
      paddingHorizontal: 15,
      zIndex: -1,
  },
  article: {
    padding: 10,
    marginBottom: 15
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginVertical: 5,
    overflow: "hidden",
  },
})

export default helpers;
