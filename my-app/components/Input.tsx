import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import { useColor } from "../temas/temas";

interface InputProps extends TextInputProps {
    title: string,
}

export default function Input({ title, ...props }: InputProps) {
    const cores = useColor();


    const [hover, setHover] = useState(cores.textColorPrimaryVariant);
    const styles = StyleSheet.create({
        container: {
            margin: 8,
            
        },
        input: {
            height: 38,
            width: 350,
            borderRadius: 5,
            padding: 10,
            borderWidth: 1,
            borderColor: hover,
            backgroundColor: cores.bgPrimaryVariant,
        },
        textoinp: {
            fontSize: 15,
            fontWeight: 'bold',
            margin: 5,
        },
    });

    return (
        <View style={styles.container}>
            <Text style={[styles.textoinp, {color: cores.textColorPrimaryVariant}]}>{title}</Text>
            <TextInput {...props} style={styles.input} placeholderTextColor={cores.textColorPrimaryVariant} onFocus={() => {setHover(cores.bgHover);}} onBlur={() => {setHover(cores.textColorPrimaryVariant);}} />
        </View>
    );
}
