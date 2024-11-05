import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerA}>
      <TouchableOpacity style={styles.button}>
          <Button style={styles.box} title='Coin' color={'orange'}></Button>
          <Button style={styles.box} title='Coin' color={'purple'}></Button>
          <Button style={styles.box} title='Coin' color={'red'}></Button>
          <Button style={styles.box} title='Coin' color={'green'}></Button>
          <Button style={styles.box} title='Coin' color={'blue'}></Button>
      </TouchableOpacity>
      <View style={styles.containerB}>
        <Image source={require('./assets/coin.png')} style={styles.coin}></Image>

        {/* Coluna de botões alinhada à esquerda */}
        <View style={styles.leftColumn}>
          <TouchableOpacity style={styles.buttonWithShadow}>
            <Button title='Botão' color='black'></Button>
          </TouchableOpacity>
        </View>

        {/* Coluna de botões alinhada à direita */}
        <View style={styles.rightColumn}>
          <TouchableOpacity style={styles.buttonWithShadow}>
            <Button title='Botão' color='black'></Button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithShadow}>
            <Button title='Coin 7' color='orange'></Button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithShadow}>
            <Button title='Coin 8' color='orange'></Button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithShadow}>
            <Button title='Coin 9' color='orange'></Button>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonWithShadow}>
            <Button title='Coin 10' color='black'></Button>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerC}>
        <View style={styles.header}>
          <Text style={styles.title}>Design</Text>
          <TouchableOpacity style={styles.questionButton}>
            <Text style={styles.questionMark}>?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.cardsContainer}>
          <View style={styles.cardWhite}>
            <Text>Card Branco</Text>
          </View>
          <View style={styles.cardGray}>
            <Text>Card Cinza</Text>
          </View>
          <View style={styles.cardBlack}>
            <Text style={styles.cardTextWhite}>Card Preto</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
          <Button style={styles.box} title='Coin' color={'black'}></Button>
          <Button style={styles.box} title='Coin' color={'gray'}></Button>
          <Button style={styles.box} title='Coin' color={'gray'}></Button>
          <Button style={styles.box} title='Coin' color={'black'}></Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerA: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    shadowColor: 'gray',
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    width: '90%',
    padding: 10,
    borderRadius: 15
  },
  containerB: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    height: '100%',

  },
  coin: {
    width: 400,
    height: 400,
    position: 'relative',
    zIndex: -1, // Garantir que a imagem fique atrás dos botões
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 15,
  },
  leftColumn: {
    position: 'absolute',
    left: 20, // Alinhado à esquerda
   },
  rightColumn: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'space-between',
    right: 20, // Alinhado à direita
  },
  buttonWithShadow: {
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  containerC: {
    flex: 1,
    width: '90%',
    alignItems: 'stretch',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  questionButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  questionMark: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flexDirection: 'row', // Alinha os cards em linha
    justifyContent: 'space-between', // Espaço entre os cartões
    alignItems: 'center',
  },
  cardWhite: {
    width: '30%', // Largura de 30% para o card branco
    height: 300,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  cardGray: {
    width: '30%', // Largura de 30% para o card cinza
    height: 300,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  cardBlack: {
    width: '30%', // Largura de 30% para o card preto
    height: 300,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTextWhite: {
    color: 'white', // Texto do card preto em branco para visibilidade
  },
});