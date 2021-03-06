import {Block, Text} from '../components';
import React from 'react';
import {StyleSheet,
        ScrollView, FlatList, View,
        TouchableOpacity, Image} from 'react-native';
import { AdMobBanner } from 'react-native-admob';

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

              <TouchableOpacity onPress={() => navigation.navigate("Donate", { url: 'https://give2asia.org/donate-china-coronavirus-fund/' })} style={{flex:0.5}}>
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


  renderArticles: function(articles, navigation) {

    return(

      <Block column flex={0.8} color="gray2" style={styles.articles}>

        <Block row space="between" style={{ paddingHorizontal: 20, marginBottom: -10 }}>
          <Text light>Latest News</Text>
          <TouchableOpacity activeOpacity={0.8} onPress = { () => navigation.navigate("News", { articles: articles }) }>
            <Text semibold>View All</Text>
          </TouchableOpacity>
        </Block>

        <Block row flex={8.0}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={articles.slice(0,3)}
          renderItem={({ item }) =>
              this.renderArticle(item, navigation)
          }
          keyExtractor={item => item.url}
          />
        </Block>

      </Block>
    );
  },

  renderAllArticles: function(articles, navigation) {
    return (
      <Block column flex={ false } color="gray2" style={styles.articles, {paddingTop: 0, marginTop: -10, paddingHorizontal: 20,}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={articles}
            renderItem={({ item }) =>
                this.renderAllArticle(item, navigation)
            }
            keyExtractor={item => item.url}
            />
        </Block>

    );
  },

  renderArticle: function(item, navigation) {
    return (
      <TouchableOpacity activeOpacity={0.8} onPress = { () => navigation.navigate("SingleNews", { url: item.url }) }>
        <Block row card shadow color="white" style={styles.article}>
          <Block flex={0.5}>
            <Image style={styles.image} source={{ uri: item.urlToImage }} />
          </Block>
          <Block flex={1} column middle>
            <Text>{item.title}</Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  },

  renderAllArticle: function(item, navigation) {
    return (

      <TouchableOpacity activeOpacity={0.8} onPress = { () => navigation.navigate("SingleNews", { url: item.url }) }>
        <Block row card shadow color="white" style={styles.article}>
          <Block flex={0.5}>
            <Image style={styles.image1} source={{ uri: item.urlToImage }} />
          </Block>
          <Block flex={0.8} column middle>
            <Text caption semibold>{item.title}</Text>
          </Block>
        </Block>
      </TouchableOpacity>


    );
  },


  renderAds: function() {
    return (
      <AdMobBanner
        adSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" //its test adUnitId
        testDevices={[AdMobBanner.simulatorId]}
        //onAdFailedToLoad={error => console.error(error)}
      />
    );
  },

  renderLiveUpdates: function(confirmed, deaths, recovered) {
    return (
    <Block column flex={0.36} style={{ paddingHorizontal: 15, marginTop: 20 }}>

      <Block card shadow color="white" style={styles.header, {paddingVertical: 100, marginTop: 5}}>

        <Block row space="between" style={{ paddingHorizontal: 30, marginTop: -50, }}>
            <Block flex={false} row center >
              <Text h2 semibold>{ confirmed }</Text>
            </Block>
            <Block flex={false} row center style={{ marginLeft: 0 }}>
              <Text h2 primary semibold>{ deaths }</Text>
            </Block>
            <Block flex={false} row center>
              <Text h2 color="#2E8B57" semibold>{ recovered }</Text>
            </Block>
        </Block>

        <Block flex={0.25} center row space="between" style={{ paddingHorizontal: 30, marginTop: 25, marginBottom: 20,}}>
          <Text caption light>Confirmed</Text>
          <Text caption light>Deaths</Text>
          <Text caption light>Recovered</Text>
        </Block>
      </Block>

    </Block>

);
  },

  renderCountryUpdate: function(item) {
    return (
      <Block row style={{ padding: 10, paddingHorizontal: 30 }}>
        <Block center space="between"  flex={1} column middle>
          <Text caption>{item.country}</Text>
        </Block>
        <Block center space="between" flex={1} column middle>
          <Text caption>{item.count}</Text>
        </Block>
      </Block>
    );
  },

  renderCountryUpdates: function(count_by_country) {

    return (

        <Block column flex={0.7} style={{marginTop:-60, paddingHorizontal: 25}} color="gray2">
          <Text semibold style={{padding: 10, textAlign: 'center', fontSize: 15}}>Confirmed Cases by Country/Region</Text>
          <Block card shadow color="white" style={{paddingHorizontal: 10, marginBottom: 5,}}>
          <FlatList
            showsVerticalScrollIndicator={true}
            data={count_by_country}
            renderItem={({ item }) =>
                this.renderCountryUpdate(item)
            }
            keyExtractor={item => item.country}
            />
          </Block>
        </Block>
    );

  },

  renderDosAndDont: function(item) {
    console.log(item.dos);
    return (
      <Block row style={{ padding: 10, paddingHorizontal: 30, borderBottomColor: "#ccc", borderBottomWidth: 1 }}>
        <Text style={{ fontSize: 14 }}>{item.dos}</Text>
      </Block>
    );
  },

  renderDosAndDonts: function(dosAndDonts) {
    return (
      <Block column flex={1} style={{paddingHorizontal: 5}} color="white">
        <FlatList
          showsVerticalScrollIndicator={true}
          data={dosAndDonts}
          renderItem={({ item }) =>
              this.renderDosAndDont(item)
          }
          keyExtractor={item => item.key}
          />
        </Block>
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
    height: 60,
    width: 60,
    borderRadius: 60,
    marginVertical: 5,
    overflow: "hidden",
  },
  image1: {
    height: 96,
    width: 96,
    borderRadius: 96,
    marginVertical: 5,
    overflow: "hidden",
  },
})

export default helpers;
