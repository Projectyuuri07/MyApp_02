import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PatriBar from "../components/PatrimonioBar";
import {AntDesign, MaterialIcons, Ionicons  } from '@expo/vector-icons';
import Footbar from "../components/Footer";


const Descricao = () => {
    return(
        <View style={styles.container}>

            <PatriBar color="red">
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="#ffff" />
                </TouchableOpacity>
                    <Text style={styles.text}>Scanner</Text>
                <TouchableOpacity>
                    <Ionicons name="reload-outline" size={24} color="#ffff" />
                </TouchableOpacity>
            </PatriBar>

            <View style={styles.corpo}>
                <MaterialIcons name="qr-code-scanner" size={350} color="#5D5C5C" />
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
    },
    corpo: {
        alignItems: "center",
        paddingTop: 150,
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

export default Descricao;
