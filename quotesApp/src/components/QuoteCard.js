import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const QuoteCard = ({ quote, author, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>- {author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default QuoteCard;