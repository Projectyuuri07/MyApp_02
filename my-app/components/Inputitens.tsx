import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TextInputProps } from 'react-native';

interface InventoryInputProps extends TextInputProps{
    label: string,
}

export default function InventoryInput({label, ...props}: InventoryInputProps) {
    const [hover, setHover] = useState("595959");
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
            backgroundColor: '#fff',
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
            <TextInput {...props} style={styles.input} onFocus={() =>{setHover("#F39200");}} onBlur={() =>{setHover("#595959");}} />
            <Text style={styles.label}>{label}<Text style={styles.text}> * </Text></Text>
        </View>
    );
}