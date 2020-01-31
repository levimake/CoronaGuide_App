import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import * as theme from '../theme';

export default class Block extends Component {

  render() {

    const {
      flex,
      row,
      column,
      center,
      middle,
      card,
      shadow,
      color,
      style,
      children,
      ...props} = this.props;

    const blockStyles = [
      styles.block,
      flex && { flex },
      flex === false && { flex: 0 },
      row && styles.row,
      column && styles.column,
      center && styles.center,
      middle && styles.middle,
      card && styles.card,
      shadow && styles.shadow,
      color && styles[color],
      color && !styles[color] && { backgroundColor: color }, //predefined styles colors for backgroundColor
      style,
    ];

    return (
      <View style= {blockStyles} {...props}>
        {children}
      </View>
    );

  }
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: theme.sizes.border,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: { backgroundColor: theme.colors.accent, },
  primary: { backgroundColor: theme.colors.primary, },
  secondary: { backgroundColor: theme.colors.secondary, },
  tertiary: { backgroundColor: theme.colors.tertiary, },
  black: { backgroundColor: theme.colors.black, },
  white: { backgroundColor: theme.colors.white, },
  gray: { backgroundColor: theme.colors.gray, },
  gray2: { backgroundColor: theme.colors.gray2, } ,
});
