import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [resultado, setResultado] = useState('');
  const [imagem, setImagem] = useState(require('./assets/comparativo.png')); // Estado para controlar a imagem exibida

  // Função para calcular a vantagem entre álcool e gasolina
  const calcularCombustivel = () => {
    const precoAlcool = parseFloat(alcool);
    const precoGasolina = parseFloat(gasolina);

    if (!precoAlcool || !precoGasolina || precoAlcool <= 0 || precoGasolina <= 0) {
      setResultado('Por favor, insira valores válidos.');
      return;
    }

    const relacao = precoAlcool / precoGasolina;

    if (relacao <= 0.7) {
      setResultado('Abasteça com Álcool');
      setImagem(require('./assets/alcool.png')); // Imagem para álcool
    } else {
      setResultado('Abasteça com Gasolina');
      setImagem(require('./assets/gasolina.png')); // Imagem para gasolina
    }
  };

  // Função para reiniciar os campos
  const reiniciar = () => {
    setAlcool('');
    setGasolina('');
    setResultado('');
    setImagem(require('./assets/comparativo.png')); // Voltar para a imagem inicial
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comparação de Combustível</Text>

      {/* Imagem representativa */}
      {imagem && (
        <Image
          source={imagem}
          style={styles.resultImage}
        />
      )}

      {/* Entrada de preço do álcool */}
      <TextInput
        style={styles.input}
        placeholder="Preço do álcool (R$)"
        keyboardType="numeric"
        value={alcool}
        onChangeText={setAlcool}
      />

      {/* Entrada de preço da gasolina */}
      <TextInput
        style={styles.input}
        placeholder="Preço da gasolina (R$)"
        keyboardType="numeric"
        value={gasolina}
        onChangeText={setGasolina}
      />

      {/* Botão para calcular */}
      <View style={styles.calcularButton}>
        <Button title="Calcular" onPress={calcularCombustivel} color="black" />
      </View>

      {/* Botão para reiniciar */}
      <View style={styles.resetButton}>
        <Button title="Reiniciar" onPress={reiniciar} color="black" />
      </View>

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
    backgroundColor: '#dee3e3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    width: '80%',
    borderRadius: 5,
  },
  result: {
    marginTop: 50,
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'black',
    padding: 20,
    color: 'white'
  },
  resultImage: {
    width: 350,
    height: 235,
    marginBottom: 20,
  },
  calcularButton: {
    marginTop: 10,
    width: '50%',
  },
  resetButton: {
    marginTop: 10,
    width: '50%',
  },
});