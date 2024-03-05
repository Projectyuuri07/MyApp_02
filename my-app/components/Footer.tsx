import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

type Props = {
    onPress: () => void;
  };

const Footbar = ({onPress} : Props) => {
    return (
        <View>
            <View style={styles.addButtonContainer}>
                <AntDesign name="pluscircle" size={50} color="red" onPress={onPress} />
            </View>

            <View style={styles.display}>
                <FontAwesome6 name="camera-rotate" size={30} color="#ffffff" />
                <FontAwesome5 name="list-ol" size={30} color="#ffffff" />  
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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

export default Footbar;


    