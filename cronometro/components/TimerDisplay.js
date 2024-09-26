import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TimerDisplay = ({ time }) => {
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = (time % 1000) / 10;

    return (
      `${minutes < 10 ? '0' : ''}${minutes}:` +
      `${seconds < 10 ? '0' : ''}${seconds}:` +
      `${milliseconds < 10 ? '0' : ''}${milliseconds}`
    );
  };

  return <Text style={styles.timer}>{formatTime(time)}</Text>;
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 48,
    marginBottom: 20,
  },
});

export default TimerDisplay;