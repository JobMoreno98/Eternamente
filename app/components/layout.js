import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'react-native';

export const Layout = ({ children }) => {
    return <View style={styles.container}>
        <StatusBar />
        {children}</View>
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 20,
        alignItems: "center",
        justifyContent:'center',
        flex:1,
    }

});
