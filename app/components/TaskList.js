import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem.js'

export default function TaskList({ task }) {
    const renderItem = ({ item }) => {
        return <TaskItem task={item}/>
    }
    return (
        <FlatList
            style={styles.FlatList}
            data={task}
            keyExtractor={(item) => item.id + ""}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    FlatList: {
        width: "90%"
    }
})