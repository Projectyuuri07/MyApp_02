import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PatriBar from "@components/PatrimonioBar";
import {AntDesign, MaterialIcons } from '@expo/vector-icons';
import InputinventoryInput from "@components/Inputitens";
import { Link } from "expo-router";

const Editar = () => {
    return(
        <View style={styles.container}>
            <PatriBar color="red">
                <TouchableOpacity>
                    <Link href="/DescricaoIten" asChild>
                        <AntDesign name="arrowleft" size={25} color="#ffff" />
                    </Link>
                </TouchableOpacity>
                    <Text style={styles.text}>Editar</Text>
                <TouchableOpacity>
                    <MaterialIcons name="check-circle" size={25} color="#ffff" />
                </TouchableOpacity>
            </PatriBar>

            <View style={styles.inputContainer}>
                <InputinventoryInput label="N° Inventario" placeholder="957689"/>
                <InputinventoryInput label="Descrição" placeholder="CADEIRA GIRATÓRIA"/>
                <InputinventoryInput label="Local" placeholder="SALA C13"/>
                <InputinventoryInput label="Responsável" placeholder="CARLOS"/>
                <InputinventoryInput label="Data de registro" placeholder="05/03/2024"/>
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
    inputContainer: {
        flex: 1,
        marginTop: 50,

    },
});

export default Editar;