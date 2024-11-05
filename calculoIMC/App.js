import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState('');  
  const [calculoRealizado, setCalculoRealizado] = useState(false);  

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || alturaNum <= 0) {
      setResultado('Por favor, insira valores válidos.');
      setImagem(null);
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';
    let imagemClassificacao = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      imagemClassificacao = require('./assets/abaixoPeso.png');
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
      imagemClassificacao = require('./assets/saudavel.png');
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
      imagemClassificacao = require('./assets/acimaPeso.png');
    } else if (imc >= 30 && imc < 39.9) {
      classificacao = 'Obesidade';
      imagemClassificacao = require('./assets/obesidade.png');
    } else {
      classificacao = 'Obesidade grave';
      imagemClassificacao = require('./assets/obesidadeGrave.png');
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
    setImagem(imagemClassificacao);
    setCalculoRealizado(true);  
  };

  const resetarFormulario = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setImagem('');
    setCalculoRealizado(false);  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      {imagem && (
        <Image
          source={imagem}
          style={styles.resultImage}
        />
      )}

      {!calculoRealizado && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite seu peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua altura (m)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
        </>
      )}

      {!calculoRealizado ? (
        <Button title="Calcular IMC" onPress={calcularIMC} color="red" />
      ) : (
        <Button title="Recalcular IMC" onPress={resetarFormulario} color="red" />
      )}

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#e8f4f8', // Cor de fundo clara e moderna
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'green', // Cor moderna para o título
    marginBottom: 16,
  },
  input: {
    height: 48,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 16,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  result: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Cor do texto mais neutra e moderna
    textAlign: 'center',
  },
  resultImage: {
    width: 130,
    height: 280,
    marginBottom: 20,
  },
});