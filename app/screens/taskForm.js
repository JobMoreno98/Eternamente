import { StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { Layout } from '../components/layout.js'
import { login } from '../api.js'

export default function TaskForm({ navigation }) {

  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const change = (name, value) => setTask({ ...task, [name]: value });

  const createTwoButtonAlert = ({ result }) =>
    Alert.alert(
      "Incorrecto",
      "Alguno de los nombres es incorrecto, favor de ingresarlos nuevamente"
    );
  const submit = async () => {
    const result = await login(task)
    if (result[0].length == 1) {
      navigation.navigate('Home', { nombre: result[0][0]['nombre'] })
    } else {
      createTwoButtonAlert(result[0])
    }
  }

  return (
    <Layout style={{justifyContent: 'center',alignItems: 'center'}}>
      <TextInput style={styles.input} placeholder="Nombre" onChangeText={(text) => change('title', text)} />
      <TextInput style={styles.input} placeholder="Nombre del Doctor" onChangeText={(text) => change('description', text)} />
      <TouchableOpacity style={styles.opacity} onPress={submit}>
        <Text style={styles.text}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </Layout>
  );
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 5,
    fontSize: 14,
    textAlign: 'center',
    borderRadius: 5,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#000'
  },
  opacity: {
    padding: 5,
    backgroundColor: 'purple',
    width: "90%",
    textAlign: 'center',
  },
  text: {
    color: "#fff",
    textAlign: 'center',
  }
});
