import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState('');  // Estado para controlar a imagem exibida
  const [calculoRealizado, setCalculoRealizado] = useState(false);  // Estado para controlar se o cálculo foi realizado

  // Função para calcular o IMC e selecionar a imagem correta
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
      imagemClassificacao = require('./assets/abaixoPeso.png'); // Imagem para "Abaixo do peso"
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = 'Peso normal';
      imagemClassificacao = require('./assets/saudavel.png'); // Imagem para "Peso normal"
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = 'Sobrepeso';
      imagemClassificacao = require('./assets/acimaPeso.png'); // Imagem para "Sobrepeso"
    } else if (imc >= 30 && imc < 39.9) {
      classificacao = 'Obesidade';
      imagemClassificacao = require('./assets/obesidade.png'); // Imagem para "Obesidade"
    } else {
      classificacao = 'Obesidade grave';
      imagemClassificacao = require('./assets/obesidadeGrave.png'); // Imagem para "Obesidade grave"
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)}. Classificação: ${classificacao}`);
    setImagem(imagemClassificacao); // Define a imagem baseada na classificação
    setCalculoRealizado(true);  // Marca como cálculo realizado
  };

  // Função para resetar o formulário
  const resetarFormulario = () => {
    setPeso('');
    setAltura('');
    setResultado('');
    setImagem('');
    setCalculoRealizado(false);  // Reseta o estado para permitir novo cálculo
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      {/* Imagem correspondente à classificação */}
      {imagem && (
        <Image
          source={imagem}
          style={styles.resultImage}
        />
      )}

      {/* Entrada de peso */}
      {!calculoRealizado && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Digite seu peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
          />

          {/* Entrada de altura */}
          <TextInput
            style={styles.input}
            placeholder="Digite sua altura (m)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
        </>
      )}

      {/* Botão para calcular */}
      {!calculoRealizado ? (
        <Button title="Calcular IMC" onPress={calcularIMC} />
      ) : (
        <Button title="Recalcular IMC" onPress={resetarFormulario} />
      )}

      {/* Resultado */}
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '80%',
    borderRadius: 5,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultImage: {
    width: 150,
    height: 300,
    marginBottom: 20,
  },
});