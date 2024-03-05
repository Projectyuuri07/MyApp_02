import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text} from "react-native";
import PatriBar from "../components/PatrimonioBar";
import Itens from "../components/Itens";
import { Feather, Octicons } from '@expo/vector-icons';
import Footbar from "../components/Footer";


const Patrimonio = () => {

    const Adicionar = () => {
        alert('Adicionar ainda está em desenvolvimento!');
    }

    return(
        <View style={styles.container}>

            <PatriBar>
                <TouchableOpacity>
                    <Octicons name="three-bars" size={24} color="black" />
                </TouchableOpacity>
                    <Text>Lista</Text>
                <TouchableOpacity>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </PatriBar>

            <ScrollView>
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />

            </ScrollView>

            <Footbar onPress={Adicionar}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
    
export default Patrimonio;