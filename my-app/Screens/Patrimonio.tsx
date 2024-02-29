import React from "react";
import { AntDesign,FontAwesome5, FontAwesome6,} from '@expo/vector-icons';
import { View, StyleSheet, ScrollView } from "react-native";
import PatrimonioBar from "../components/PatrimonioBar";
import Itens from "../components/Itens";


const Patrimonio = () => {

    const Adicionar = () => {
        alert('Adicionar ainda está em desenvolvimento!');
    }

    return(
        <View style={styles.container}>
            <PatrimonioBar />

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

                <View style={styles.addButtonContainer}>
                    <AntDesign name="pluscircle" size={50} color="red" onPress={Adicionar} />
                </View>

                <View style={styles.display}>
                    <FontAwesome6 name="camera-rotate" size={30} color="#ffffff" />
                    <FontAwesome5 name="list-ol" size={30} color="#ffffff" />
                    
                </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    display: {
        width: "100%",
        height: 60,
        bottom: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0000",
        gap: 20,

    },
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
});
    
export default Patrimonio;