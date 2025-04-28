import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../src/styles/styles';
import { somar, subtrair, multiplicar, dividir } from '../src/utils/operations';

export default function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('somar');
  const [result, setResult] = useState(null);

  function calcular() {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Erro: Números inválidos');
      return;
    }

    switch (operation) {
      case 'somar':
        setResult(somar(a, b));
        break;
      case 'subtrair':
        setResult(subtrair(a, b));
        break;
      case 'multiplicar':
        setResult(multiplicar(a, b));
        break;
      case 'dividir':
        setResult(dividir(a, b));
        break;
      default:
        setResult('Operação inválida');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Picker
        selectedValue={operation}
        style={styles.picker}
        onValueChange={(itemValue) => setOperation(itemValue)}
      >
        <Picker.Item label="Somar" value="somar" />
        <Picker.Item label="Subtrair" value="subtrair" />
        <Picker.Item label="Multiplicar" value="multiplicar" />
        <Picker.Item label="Dividir" value="dividir" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {result !== null && (
        <Text style={styles.result}>Resultado: {result}</Text>
      )}
    </View>
  );
}
