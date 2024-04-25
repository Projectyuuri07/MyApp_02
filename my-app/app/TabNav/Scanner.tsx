import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";
import { useColor } from "../../temas/temas";

const Scanner = () => {
    const cores = useColor();
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission)
        return null;

    if (!permission.granted)
        return <View style={styles.container}><Text>Permissão negada</Text></View>;

    return (
        <View style={styles.container}>
            {isCameraActive ? (
                <Camera style={styles.camera} type={CameraType.back}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.button} onPress={() => setIsCameraActive(false)}>
                            <MaterialIcons name="qr-code-scanner" size={300} color={cores.textColorPrimaryVariant}/>
                        </TouchableOpacity>
                    </View>
                </Camera>
            ) : (
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setIsCameraActive(true)}>
                    <MaterialIcons name="qr-code-scanner" size={300} color={cores.textColorPrimaryVariant} />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Scanner;
