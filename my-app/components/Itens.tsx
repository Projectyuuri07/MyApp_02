import { Link } from "expo-router";
import React from "react";
import {Text, View, StyleSheet } from "react-native";
import { useColor } from "../temas/temas";

type Props = {
    id: number,
    item: string,
};

export default function Itens({id, item }: Props){
    const cores = useColor();

    const styles = StyleSheet.create({
        display: {
            borderBottomColor: '#f5f5f5',
            borderBottomWidth: 1,
            gap: 10,
        },
        text : {
            fontSize: 20,
            fontWeight: '500',
            color:  cores.textColorPrimary,
            alignContent: 'center',
            marginLeft: 25,
            marginTop: 20,
            
            
        },
        item: {
            fontSize: 15,
            fontWeight: '500',
            color: cores.textColorPrimary,
            alignContent: 'center',
            marginLeft: 25,
            marginBottom: 20,
        },
    });
    return(
        <View style={styles.display}>
            <Link href="/TabNav/DrawerNav/Home/DescricaoIten" asChild>
                <Text style={styles.text}>{id}</Text>
            </Link>
                <Text style={styles.item}>{item}</Text>
        </View>
    );
};

