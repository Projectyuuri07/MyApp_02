import React from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps{
    title: string,
}

const Inputs = ({ title, ...props}: InputProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textoinp}>{title}</Text>
            <TextInput {...props} style={styles.input} placeholderTextColor="#808080" />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 8,
    },
    input: {
        height: 40,
        width: 350,
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
