import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage"

export default function App() {
  const [input, setInput] = useState('')
  const [name, setName] = useState('')

  useEffect(() =>{
    loadData()
  }, [])

  async function loadData(){
    await AsyncStorage.getItem('@name').then((value) => {
      setName(value)
     
    })
  }

  async function addName() {
    await AsyncStorage.setItem('@name', input)
    setName(input) 
    setInput('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.txtForm}>
        <TextInput 
          style={styles.inputTxt} 
          placeholder='Type your name'
          onChangeText={(value) => setInput(value)}/>
        <Button title='ADD'onPress={() => addName}/>
      </View>
      <Text>{name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtForm: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  inputTxt: {
    borderWidth: 1,
    width: 250,
    padding: 10,
  }
});
