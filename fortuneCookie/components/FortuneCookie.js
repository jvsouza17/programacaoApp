import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import styles from '../styles/styles';
import { fortunes } from '../data/fortunes';

const FortuneCookie = () => {
  const [isBroken, setIsBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  const breakCookie = () => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    setFortune(randomFortune);
    setIsBroken(true);
  };

  return (
    <View style={styles.cookieContainer}>
        <Text style={styles.headerContainer} >
            FortuneCookie
        </Text>
      {/* Exibe a imagem do biscoito */}
      <Image
        style={styles.cookieImage}
        source={
          isBroken
            ? require('../assets/open_cookie.jpg')  // Biscoito aberto
            : require('../assets/closed_cookie.webp') // Biscoito fechado
        }
      />

      {/* Exibe a frase de sorte se o biscoito estiver quebrado */}
      {isBroken && <Text style={styles.fortuneText}>{fortune}</Text>}

      {/* Botão para quebrar o biscoito */}
      {!isBroken ? (
        <Button title="Quebrar Biscoito" onPress={breakCookie} />
      ) : (
        <Button
          title="Quebrar Outro Biscoito"
          onPress={() => {
            setIsBroken(false);
            setFortune('');
          }}
        />
      )}
    </View>
  );
};

export default FortuneCookie;