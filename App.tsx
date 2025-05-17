import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularImc() {
    const alturaEmMetro = parseFloat(altura) / 100;
    const imc = parseFloat(peso) / (alturaEmMetro * alturaEmMetro);

    let msg = '';

    if (imc < 18.5) {
      msg = 'Abaixo do peso';
    } else if (imc < 25) {
      msg = 'Peso ideal';
    } else if (imc < 30) {
      msg = 'Levemente acima do peso';
    } else if (imc < 35) {
      msg = 'Obesidade grau I';
    } else if (imc < 40) {
      msg = 'Obesidade grau II (severa)';
    } else {
      msg = 'Obesidade grau III (mórbida)';
    }

    setResultado(`Valor do IMC: ${imc.toFixed(2)} - ${msg}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cálculo do IMC</Text>

      <View style={styles.bloco}>
        <Text style={styles.label}>Altura (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
      </View>

      <View style={styles.bloco}>
        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={calcularImc}>
        <Text style={styles.btnTxt}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.label}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 80,
  },
  bloco: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    width: '80%',
    fontSize: 20,
    marginLeft: '10%',
    marginTop: 10,
  },
  input: {
    width: '80%',
    fontSize: 20,
    marginLeft: '10%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFF',
  },
  btn: {
    width: '80%',
    marginLeft: '10%',
    backgroundColor: '#000',
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  btnTxt: {
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
  },
});
