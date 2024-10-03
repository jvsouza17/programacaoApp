import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { Text, SafeAreaView, View, Switch, Button, StyleSheet } from 'react-native';

export default function App() {
  const [temaSelecionado, setTemaSelecionado] = useState(0);
  const [temas, setTemas] = useState([
    { key: 0, nome: 'Claro' },
    { key: 1, nome: 'Escuro' },
    { key: 2, nome: 'Automático' },
  ]);

  const [fonteSize, setFonteSize] = useState(16);
  const [modoNoturno, setModoNoturno] = useState(false);

  const resetarPreferencias = () => {
    setTemaSelecionado(0);
    setFonteSize(16);
    setModoNoturno(false);
  };

  // Define a cor de fundo com base no tema e no modo noturno
  const getBackgroundColor = () => {
    if (modoNoturno) {
      return '#000'; // Modo noturno sempre escuro
    }
    if (temaSelecionado === 1) {
      return '#000'; // Tema Escuro
    }
    return '#fff'; // Tema Claro e Automático (Claro)
  };

  let temasItems = temas.map((tema, key) => {
    return <Picker.Item key={key} value={key} label={tema.nome} />;
  });

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={[styles.titulo, { color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
        Configurações
      </Text>

      {/* Picker para selecionar o tema */}
      <Text style={[styles.label, { color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
        Selecione o Tema:
      </Text>
      <Picker
        selectedValue={temaSelecionado}
        onValueChange={(itemValue) => setTemaSelecionado(itemValue)}
        style={[styles.picker, { color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
        {temasItems}
      </Picker>
      <Text style={[styles.resultado, { color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
        Tema: {temas[temaSelecionado].nome}
      </Text>

      {/* Slider para ajustar o tamanho da fonte */}
      <Text style={[styles.label, { color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
        Tamanho da Fonte:
      </Text>
      <Slider
        minimumValue={12}
        maximumValue={30}
        value={fonteSize}
        onValueChange={(value) => setFonteSize(value)}
        style={styles.slider}
      />
      <Text style={[styles.resultado, { fontSize: fonteSize, color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
        Tamanho da Fonte: {fonteSize.toFixed(0)}
      </Text>

      {/* Switch para ativar ou desativar o Modo Noturno */}
      <View style={styles.switchContainer}>
        <Text style={[styles.label, { color: temaSelecionado === 1 || modoNoturno ? '#fff' : '#000' }]}>
          Modo Noturno: {modoNoturno ? 'Ativado' : 'Desativado'}
        </Text>
        <Switch
          value={modoNoturno}
          onValueChange={(value) => setModoNoturno(value)}
        />
      </View>

      {/* Botão para resetar preferências */}
      <Button title="Resetar Preferências" onPress={resetarPreferencias} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
  },
  picker: {
    marginVertical: 10,
    backgroundColor: 'gray'
  },
  slider: {
    marginVertical: 10,
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 20,
    marginBottom: 10,
  },
  resultado: {
    fontSize: 14,
    marginBottom: 10,
  },
});