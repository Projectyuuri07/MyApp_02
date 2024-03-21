import React from "react";
import { View, StyleSheet} from "react-native";
import { StatusBar } from 'expo-status-bar';

type Props = {
    children: any;
    color: string;
};

export default function PatriBar({children, color}: Props){
    const styles = StyleSheet.create({
        container: {
            height: 70,
            width: "100%",
            borderBottomColor: "#F5F5F5",
            padding: 4,
            justifyContent: "center",
        },
        separar: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 10,      
        }
    });
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.separar}>{children}</View>
        </View>
    );
}



