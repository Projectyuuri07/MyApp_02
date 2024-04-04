import React from "react";
import { View, StyleSheet} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';



const Scanner = () => {
    return(
        <View style={styles.container}>

            <View style={styles.corpo}>
                <MaterialIcons name="qr-code-scanner" size={350} color="#5D5C5C" />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    corpo: {
        alignItems: "center",
        paddingTop: 150,
    },
   
});

export default Scanner;
