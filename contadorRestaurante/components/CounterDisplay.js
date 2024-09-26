import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CounterDisplay = ({ contador }) => {
  return (
    <Text style={styles.counter}>{contador}</Text>
  );
};

const styles = StyleSheet.create({
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default CounterDisplay;