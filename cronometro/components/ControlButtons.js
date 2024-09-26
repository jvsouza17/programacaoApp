import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ControlButtons = ({ isRunning, onStartPause, onReset }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={isRunning ? 'Pausar' : 'Iniciar'}
        onPress={onStartPause}
      />
      <Button title="Reiniciar" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 200,
  },
});

export default ControlButtons;