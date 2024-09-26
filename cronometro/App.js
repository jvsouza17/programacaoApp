import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TimerDisplay from './components/TimerDisplay';
import ControlButtons from './components/ControlButtons';

export default function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (isRunning) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Atualiza a cada 10ms
      }, 10);
      setIntervalId(id);
    } else if (!isRunning && intervalId) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startPauseHandler = () => {
    setIsRunning(!isRunning);
  };

  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
    if (intervalId) {
      clearInterval(intervalId);
    }
  };

  return (
    <View style={styles.container}>
      <TimerDisplay time={time} />
      <ControlButtons
        isRunning={isRunning}
        onStartPause={startPauseHandler}
        onReset={resetHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
