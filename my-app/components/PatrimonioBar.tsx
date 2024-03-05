import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Entypo, Foundation} from '@expo/vector-icons';

type PatrimonioBarProps = {
    title: string;
};

const PatrimonioBar = ({ title }: PatrimonioBarProps) => {

    const Lista = () => {
        alert('Lista ainda está em desenvolvimento!');
    }

    const Pesquisa = () => {
        alert('Pesquisa ainda está em desenvolvimento!');
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#333" />
            
            <View style={styles.displaytop}>
                <Foundation name="list" size={30} color="#595959" onPress={Lista} />

                <Text style={styles.texto}>{title}</Text>

                <TouchableOpacity>
                    <Entypo name="magnifying-glass" size={30} color="#595959" onPress={Pesquisa} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 120,
    },
    displaytop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 360,
        padding: 10,
    },
    texto: {
        color: 'black',
        fontSize: 20,
        padding: 5,
    },
});

export default PatrimonioBar;