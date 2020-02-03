import {Block, Text} from '../components';
import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

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

        <Block flex={0.5} center row space="between" style={{ paddingHorizontal: 30, marginTop: 20, marginBottom: 20,}}>
          <Text caption light>Confirmed</Text>
          <Text caption light>Deaths</Text>
        </Block>

        <Block style={{ }}>
          <Text>View Full Statistics</Text>
        </Block>

      </Block>
    </Block>


  )
  },

  renderArticles: function() {
    return(
      <Block column flex={0.8} color="gray2" style={styles.articles}>
        <Block row space="between">
          <Text light>Latest News</Text>
          <Text semibold>View All</Text>
        </Block>

        <ScrollView contentContainerStyle={{ flex: 1 }}>

        </ScrollView>

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    paddingVertical: 45,
    zIndex: 1,
  },
  articles: {
      marginTop: -50,
      paddingTop: 65,
      paddingHorizontal: 15,
      zIndex: -1,
  }
})

export default helpers;
