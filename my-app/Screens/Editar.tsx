import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PatriBar from "../components/PatrimonioBar";
import {AntDesign, MaterialIcons } from '@expo/vector-icons';
import Footbar from "../components/Footer";
import InputinventoryInput from "../components/Inputitens";

const Editar = () => {
    return(
        <View style={styles.container}>

            <PatriBar color="red">
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={25} color="#ffff" />
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
    inputContainer: {
        flex: 1,
        marginTop: 50,

    },
});

export default Editar;