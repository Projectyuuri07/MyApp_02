import React from "react";
import { View, StyleSheet} from "react-native";
import InputinventoryInput from "@components/Inputitens";
import { useColor } from "../../../../temas/temas";

const Editar = () => {
    const cores = useColor();
    return(
        <View style={[styles.container,{backgroundColor: cores.bgPrimary}]}>

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
    inputContainer: {
        flex: 1,
        marginTop: 50,
    },
});

export default Editar;