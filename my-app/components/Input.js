import React from "react";
import { View, TextInput, StyleSheet, Text } from 'react-native';


const Inputs = ({ placeholder, secureTextEntry, title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoinp}>{title}</Text>
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#808080" secureTextEntry={secureTextEntry}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    input: {
        height: 40,
        backgroundColor: '#dcdcdc',
        borderRadius: 5,
        padding: 10,
    },
    textoinp: {
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold',
        margin: 5,
      },
});

export default Inputs;
