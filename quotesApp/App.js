import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import QuoteCard from './src/components/QuoteCard';
import quotesData from './src/data/quotes.json';

export default function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuoteIndex(randomIndex);
  };

  const currentQuote = quotesData[quoteIndex];

  return (
    <View style={styles.container}>
      <QuoteCard
        quote={currentQuote.quote}
        author={currentQuote.author}
        image={require(`./assets/images/${currentQuote.image}`)}
      />
      <Button title="Nova Citação" onPress={getRandomQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
});
