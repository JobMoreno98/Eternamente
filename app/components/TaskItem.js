import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const taskItem = ({ task }) => {
    
    return (

        <View style={styles.itemContainer}>
            <TouchableOpacity >
                <Text style={styles.item}>Nombre: {task.nombre}</Text>
                <Text style={styles.item}>Descripcion: {task.descripcion}</Text>
            </TouchableOpacity>
        </View>


    )
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#333",
        padding: 10,
        marginVertical: 8,
        color: "white",
    },
    item: {
        color: "white",
    }
})

export default taskItem