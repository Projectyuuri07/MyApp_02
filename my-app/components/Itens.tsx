import React from "react";
import {Text, View, StyleSheet } from "react-native";

type Props = {
    id: number,
    item: string,
};

export default function Itens({id, item }: Props){
    const styles = StyleSheet.create({
        display: {
            borderBottomColor: '#f5f5f5',
            borderBottomWidth: 2,
            gap: 10,
        },
        text : {
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
            alignContent: 'center',
            marginLeft: 25,
            marginTop: 20,
            
            
        },
        item: {
            fontSize: 15,
            fontWeight: '500',
            color: 'lightgray',
            alignContent: 'center',
            marginLeft: 25,
            marginBottom: 20,
        },
    });
    return(
        <View style={styles.display}>
            <Text style={styles.text}>{id}</Text>
            <Text style={styles.item}>{item}</Text>
        </View>
    );
};

