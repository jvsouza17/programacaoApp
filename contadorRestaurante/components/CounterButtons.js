import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const CounterButtons = ({ incrementar, decrementar }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title="Entrada" onPress={incrementar} />
      <Button title="Saída" onPress={decrementar} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});

export default CounterButtons;