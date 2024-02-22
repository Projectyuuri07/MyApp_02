import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';

const Inputs = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        margin: 10,
    },
    input: {
        height: 40,
        backgroundColor: '#dcdcdc',
        borderRadius: 5,
        padding: 10,
    },
});
  
export default Inputs;
