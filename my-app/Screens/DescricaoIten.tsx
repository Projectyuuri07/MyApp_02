import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PatriBar from "../components/PatrimonioBar";
import {AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Footbar from "../components/Footer";


const Descricao = () => {
    return(
        <View style={styles.container}>

            <PatriBar color="red">
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="#ffff" />
                </TouchableOpacity>
                    <Text style={styles.text}>Descrição de Itens</Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="#ffff" />
                </TouchableOpacity>
            </PatriBar>

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
                <MaterialCommunityIcons name="pencil-circle" size={50} color="red" />
            </View>

            <Footbar color="white" ColorIcon="#595959" margem={1} />

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
