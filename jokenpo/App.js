import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {
  const [escolhaUsuario, setEscolhaUsuario] = useState('');
  const [escolhaApp, setEscolhaApp] = useState('');
  const [resultado, setResultado] = useState('');
  const derrota = "Você perdeu!";
  const vitoria = "Você venceu!";
  const empate = "Empate!";

  // Função para gerar uma escolha aleatória para o aplicativo
  const gerarEscolhaApp = () => {
    const opcoes = ['Pedra', 'Papel', 'Tesoura'];
    const escolhaAleatoria = opcoes[Math.floor(Math.random() * 3)];
    return escolhaAleatoria;
  };

  // Função para determinar o vencedor
  const determinarVencedor = (escolhaUsuario, escolhaApp) => {
    if (escolhaUsuario === escolhaApp) {
      return empate;
    } else if (
      (escolhaUsuario === 'Pedra' && escolhaApp === 'Tesoura') ||
      (escolhaUsuario === 'Tesoura' && escolhaApp === 'Papel') ||
      (escolhaUsuario === 'Papel' && escolhaApp === 'Pedra')
    ) {
      return vitoria;
    } else {
      return derrota;
    }
  };

  // Função para realizar a jogada
  const jogar = (escolha) => {
    const escolhaDoApp = gerarEscolhaApp();
    const resultadoFinal = determinarVencedor(escolha, escolhaDoApp);
    setEscolhaUsuario(escolha);
    setEscolhaApp(escolhaDoApp);
    setResultado(resultadoFinal);
  };

  // Função para reiniciar o jogo
  const reiniciarJogo = () => {
    setEscolhaUsuario('');
    setEscolhaApp('');
    setResultado('');
  };

  // Função para determinar a cor do resultado
  const corResultado = () => {
    if (resultado === vitoria) {
      return styles.resultadoVitoria;
    } else if (resultado === derrota) {
      return styles.resultadoDerrota;
    } else {
      return styles.resultadoEmpate;
    }
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Jokenpô</Text>

      {/* Opções com quadro ao redor */}
      <View style={styles.opcoesContainer}>
        <TouchableOpacity style={styles.quadro} onPress={() => jogar('Pedra')}>
          <Image source={require('./assets/pedra.png')} style={styles.imagemOpcao} />
          <Text style={styles.textOpcao}>Pedra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quadro} onPress={() => jogar('Papel')}>
          <Image source={require('./assets/papel.png')} style={styles.imagemOpcao} />
          <Text style={styles.textOpcao}>Papel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quadro} onPress={() => jogar('Tesoura')}>
          <Image source={require('./assets/tesoura.png')} style={styles.imagemOpcao} />
          <Text style={styles.textOpcao}>Tesoura</Text>
        </TouchableOpacity>
      </View>

      {/* Resultado */}
      {resultado ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado}>Sua escolha: {escolhaUsuario}</Text>
          <Text style={styles.resultado}>Escolha do App: {escolhaApp}</Text>
          <Text style={[styles.resultadoFinal, corResultado()]}>{resultado}</Text>
        </View>
      ) : null}

      {/* Botão "Jogar Novamente" */}
      {resultado ? (
        <Button title="Jogar Novamente" onPress={reiniciarJogo} color="#16b2fa" />
      ) : null}
    </View>
  );
}

// Estilos do aplicativo
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
  },
  opcoesContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  quadro: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    padding: 8,
    marginVertical: 10,
    width: 200,
    borderRadius: 10,
  },
  imagemOpcao: {
    width: 140,
    height: 120,
    marginBottom: 10,
  },
  textOpcao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  resultadoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultado: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5,
  },
  resultadoFinal: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  resultadoVitoria: {
    color: 'green',
  },
  resultadoDerrota: {
    color: 'red',
  },
  resultadoEmpate: {
    color: 'gray',
  },
});