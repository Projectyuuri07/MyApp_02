import React from "react";
import { View, StyleSheet, Text} from "react-native";
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";


const Descricao = () => {
    return(
        <View style={styles.container}>
            <View style={styles.corpo}>
                <Text style={styles.titulo}>N° do Inventario:</Text>
                <Text style={styles.item}> 957689 </Text>
                <Text style={styles.titulo}>Descrição:</Text>
                <Text style={styles.item}> CADEIRA GIRATÓRIA </Text>
                <Text style={styles.titulo}>Local:</Text>
                <Text style={styles.item}> SALA C13 </Text>
                <Text style={styles.titulo}>Responsável:</Text>
                <Text style={styles.item}> CARLOS </Text>
                <Text style={styles.titulo}>Data de Registro:</Text>
                <Text style={styles.item}> 05/03/2024 </Text>
            </View>

            <View style={styles.addButtonContainer}>
                <Link href="/Editar" asChild>
                    <MaterialCommunityIcons name="pencil-circle" size={60} color="red" />
                </Link>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "#ffff",
        fontSize: 16,
    },
    corpo: {
        flex: 1,
        marginTop: 50,
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
    titulo : {
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

export default Descricao;
