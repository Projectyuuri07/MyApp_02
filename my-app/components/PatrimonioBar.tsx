import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Entypo, Foundation} from '@expo/vector-icons';

type TextInputProps = {
    color: string
}

const PatriBar = ({children}: any) => {
    return (
        <View style={[styles.container]}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.separar}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: "100%",
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
        padding: 8,
        justifyContent: "center"
    },
    separar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10        
    }
});

export default PatriBar;