import React from "react";
import { View, StyleSheet, Text} from "react-native";
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from "expo-router";
import { useColor } from "../../../../temas/temas";


const Descricao = () => {
    const cores = useColor();

    return(
        <View style={[styles.container,{backgroundColor: cores.bgPrimary}]}>
            <View style={styles.corpo}>
                <Text style={[styles.titulo, {color: cores.textColorPrimary}]}>N° do Inventario:</Text>
                <Text style={[styles.item, {color: cores.textColorPrimaryVariant}]}> 957689 </Text>
                <Text style={[styles.titulo, {color: cores.textColorPrimary}]}>Descrição:</Text>
                <Text style={[styles.item, {color: cores.textColorPrimaryVariant}]}> CADEIRA GIRATÓRIA </Text>
                <Text style={[styles.titulo, {color: cores.textColorPrimary}]}>Local:</Text>
                <Text style={[styles.item, {color: cores.textColorPrimaryVariant}]}> SALA C13 </Text>
                <Text style={[styles.titulo, {color: cores.textColorPrimary}]}>Responsável:</Text>
                <Text style={[styles.item, {color: cores.textColorPrimaryVariant}]}> CARLOS </Text>
                <Text style={[styles.titulo, {color: cores.textColorPrimary}]}>Data de Registro:</Text>
                <Text style={[styles.item, {color: cores.textColorPrimaryVariant}]}> 05/03/2024 </Text>
            </View>

            <View style={styles.addButtonContainer}>
                <Link href="/TabNav/DrawerNav/Home/Editar" asChild>
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
    corpo: {
        flex: 1,
        marginTop: 50,
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 10,
        right: 0,
        margin: 20,
    },
    titulo : {
        fontSize: 20,
        fontWeight: '500',
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
