import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";


const Scanner = () => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [iconOpacity, setIconOpacity] = useState(1); 

    if (!permission)
        return null;

    if (!permission.granted)
        return null;


    return(
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialIcons name="qr-code-scanner" size={300} color="#5D5C5C" style={{ opacity: iconOpacity }} />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      },
    camera: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 240,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default Scanner;
