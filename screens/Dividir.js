import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Dividir() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');


  const handleDivision = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor ingrese números válidos');
    } else if (num2 === 0) {
      if (num1 === 0) {
        setResultado('INDETERMINACIÓN');
      } else {
        setResultado('NO EXISTE DIVISIÓN PARA CERO');
      }
    } else {
      setResultado((num1 / num2).toString());
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realizar Operación</Text>
      <View>

        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSksB5MSjLyDdpkABMWzS7GRifbfit1ujZDeQ&usqp=CAU' }}
          style={styles.img}
        />

      </View>
      <Text></Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        onChangeText={text => setNumero1(text)}
        value={numero1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        onChangeText={text => setNumero2(text)}
        value={numero2}
        keyboardType="numeric"
      />

      <Button
        title="Dividir"
        onPress={handleDivision}
      />
      <Text style={styles.result}>{resultado}</Text>



    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',

  },
  screen1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screen2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  image: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
  img: {
    width: 300,
    height: 300,
  }
});
