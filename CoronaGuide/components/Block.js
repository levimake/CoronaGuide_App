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
      left,
      right,
      card,
      card1,
      shadow,
      color,
      space,
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
      left && styles.left,
      right && styles.right,
      card && styles.card,
      card1 && styles.card1,
      shadow && styles.shadow,
      space && { justifyContent: `space-${space}` },
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
  card1: {
    borderBottomLeftRadius: theme.sizes.border,
    borderBottomRightRadius: theme.sizes.border,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
  justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
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
