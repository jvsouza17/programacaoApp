import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador de Pessoas</Text>
      <CounterDisplay contador={contador} />
      <CounterButtons incrementar={incrementar} decrementar={decrementar} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});