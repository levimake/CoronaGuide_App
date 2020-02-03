import {Block, Text, ArticlesDetail} from '../components';
import React from 'react';
import {StyleSheet,
        ScrollView, FlatList, View,
        TouchableOpacity, Image} from 'react-native';


const helpers = {
  renderHeader: function(confirmed, deaths) {
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
              <Text h1 semibold>{confirmed}</Text>
            </Block>
            <Block flex={false} row center>
              <Text h1 primary semibold>{deaths}</Text>
            </Block>
        </Block>

        <Block flex={0.5} center row space="between" style={{ paddingHorizontal: 30, marginTop: 25, marginBottom: 20,}}>
          <Text caption light>Confirmed</Text>
          <Text caption light>Deaths</Text>
        </Block>

        <Block flex={1} row space="between" style={{ paddingHorizontal: 30, marginTop: 0}}>
            <Block card shadow color="gray2" style={styles.header1}>
              <Text primary semibold style={{ marginHorizontal: 5, textAlign: 'center', }}>Live Updates</Text>
            </Block>
            <Block center>
              <Text primary semibold style={{ marginHorizontal: 5, textAlign: 'center', }}>Donate To China</Text>
            </Block>
            <Block center>
              <Text primary semibold style={{ marginHorizontal: 5, textAlign: 'center', }}>Dos and Dont</Text>
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

}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingVertical: 45,
    zIndex: 1,
  },
  header1: {
    zIndex: -1,
  },
  articles: {
      marginTop: -50,
      paddingTop: 65,
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
