import React from 'react';
import { SafeAreaView } from 'react-native';
import FortuneCookie from './components/FortuneCookie';
import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FortuneCookie />
    </SafeAreaView>
  );
}