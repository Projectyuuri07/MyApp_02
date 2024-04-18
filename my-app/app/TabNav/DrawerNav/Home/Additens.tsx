import React from "react";
import { View, StyleSheet} from "react-native";
import InputinventoryInput from "@components/Inputitens";

const AddIten = () => {

    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <InputinventoryInput label="N° Inventario"/>
                <InputinventoryInput label="Descrição"/>
                <InputinventoryInput label="Local"/>
                <InputinventoryInput label="Responsável"/>
                <InputinventoryInput label="Data de registro"/> 
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
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
});

export default AddIten;