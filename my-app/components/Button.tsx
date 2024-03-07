import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export default function Botao({ label, onPress }: Props){
  const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    button: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
      width: 350,
    },
    buttonText: {
      color: 'white',
      fontSize: 17,
    },
  });

return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};



