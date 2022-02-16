import { StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getTask } from '../api.js'
import { Layout } from '../components/layout.js'
import TaskList from '../components/TaskList.js'

export default function Home({ route }) {

  const [tasks, setTask] = useState([]);

  const loadTask = async () => {
    const nombre = { "nombre": route.params.nombre }
    const data = await getTask(nombre);
    setTask(data);
  }
  useEffect(() => {
    loadTask();
  }, [])

  return (
    <Layout>
      <Text style={{ textAlign: 'center' }}>Bienvenido {"\n"} {route.params.nombre}</Text>
      <TaskList task={tasks}/>
    </Layout>
  );
}

const styles = StyleSheet.create({});
