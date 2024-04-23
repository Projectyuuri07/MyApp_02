import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';
import { useColor } from '../temas/temas';

interface InventoryInputProps extends TextInputProps{
    label: string,
}

export default function InventoryInput({label, ...props}: InventoryInputProps) {
    const cores = useColor();
    const [hover, setHover] = useState(cores.textColorPrimary);
    const styles = StyleSheet.create({
        inventoryInput: {
            marginLeft: 25,
            marginBottom: 10,
            paddingTop: 15,
            position: 'relative',
            
        },
        label: {
            position: 'absolute',
            top: 6, 
            left: 10,
            backgroundColor: cores.bgPrimary,
            paddingHorizontal: 2,
            fontWeight: 'bold',
            color: hover,
            fontSize: 12,
        },
        input: {
            padding: 10,
            borderRadius: 4,
            fontSize: 16,
            lineHeight: 24,
            width: '90%',
            borderWidth: 1,
            borderColor: hover,
        },
        text: {
            color: 'red',
        }
    });
    return (
        <View style={styles.inventoryInput}>
            <TextInput {...props} style={styles.input} onFocus={() =>{setHover(cores.bgHover);}} onBlur={() =>{setHover(cores.textColorPrimary);}} />
            <Text style={styles.label}>{label}<Text style={styles.text}> * </Text></Text>
        </View>
    );
}