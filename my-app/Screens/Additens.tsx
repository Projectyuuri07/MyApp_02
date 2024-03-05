import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text} from "react-native";
import PatriBar from "../components/PatrimonioBar";
import { Feather, Octicons } from '@expo/vector-icons';
import Footbar from "../components/Footer";
import InputinventoryInput from "../components/Inputitens";


const AddIten = () => {

    const Adicionar = () => {
        alert('Adicionar ainda está em desenvolvimento!');
    }

    return(
        <View style={styles.container}>

            <PatriBar>
                <TouchableOpacity>
                    <Octicons name="three-bars" size={24} color="black" />
                </TouchableOpacity>
                    <Text>Cadastro de itens</Text>
                <TouchableOpacity>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </PatriBar>

            <InputinventoryInput/>

            <Footbar onPress={Adicionar}/>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default AddIten;