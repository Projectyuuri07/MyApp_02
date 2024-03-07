import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    title: string,
}

export default function Input({ title, ...props }: InputProps) {
    const [hover, setHover] = useState("F5F5F5");
    const styles = StyleSheet.create({
        container: {
            margin: 8,
        },
        input: {
            height: 40,
            width: 350,
            backgroundColor: '#f5f5f5',
            borderRadius: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: hover,
        },
        textoinp: {
            fontSize: 15,
            color: 'black',
            fontWeight: 'bold',
            margin: 5,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={styles.textoinp}>{title}</Text>
            <TextInput {...props} style={styles.input} placeholderTextColor="#808080" onFocus={() => {setHover("#F39200");}} onBlur={() => {setHover("#F5F5F5");}} />
        </View>
    );
}
