import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ArticlesDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.urlToImage }} />
      <Text style={styles.name}>{ result.title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 250,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16
  },
  container: {
    marginLeft: 15
  }
});

export default ArticlesDetail;
