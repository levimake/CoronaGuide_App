import {Block, Text} from '../components';
import React from 'react';

const helpers = {
  renderHeader: function() {
    return (
    <Block column flex={0.333} style={{ paddingHorizontal: 15, }}>
      <Block flex={false} row style={{ paddingVertical: 15, }}>
        <Block center>
          <Text h3 white>Stay Safe From Corona</Text>
        </Block>
      </Block>
      <Block card shadow color="white">
        <Text>Count</Text>
      </Block>
    </Block>
  )
  },

  renderArticles: function() {
    return(
      <Block column flex={0.8} color="gray2">
        <Text>Latest News</Text>
      </Block>
    );
  }
}

export default helpers;
