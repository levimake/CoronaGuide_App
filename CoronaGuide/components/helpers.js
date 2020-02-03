import {Block, Text} from '../components';
import React from 'react';
import {StyleSheet} from 'react-native';

const helpers = {
  renderHeader: function() {
    return (
    <Block column flex={0.36} style={{ paddingHorizontal: 15, }}>
      <Block flex={false} row style={{ paddingVertical: 15, }}>
        <Block center>
          <Text h3 white>Stay Safe From Corona</Text>
        </Block>
      </Block>
      <Block card shadow color="white" style={styles.header}>
        <Block flex={2} row space="between" style={{ paddingHorizontal: 30, }}>

            <Block row center flex={false}>
              <Text h1 semibold>14,637</Text>
            </Block>

            <Block row center flex={false}>
              <Text h1 primary semibold>305</Text>
            </Block>
        </Block>

        <Block row space="between" style={{ paddingHorizontal: 30, }}>
          <Text caption light>Confirmed</Text>
          <Text caption light>Deaths</Text>
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
