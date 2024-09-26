import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import QuoteCard from './src/components/QuoteCard';
import quotesData from './src/data/quotes.json';

// Mapeamento das imagens
const images = {
  "albert-einstein.jpg": require('./assets/albert-einstein.jpg'),
  "steve-jobs.jpeg": require('./assets/steve-jobs.jpeg')
}

export default function App() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuoteIndex(randomIndex);
  };

  const currentQuote = quotesData[quoteIndex];
  const currentImage = images[currentQuote.image];

  return (
    <View style={styles.container}>
      <QuoteCard
        quote={currentQuote.quote}
        author={currentQuote.author}
        image={currentImage} 
      />
      <Button title="Nova frase" onPress={getRandomQuote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 40,
  },
});