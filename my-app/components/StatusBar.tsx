import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

type Props = {
  title: string;
};

const Status = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.image} />
      <StatusBar style="light" backgroundColor="#333" />
      <Text style={styles.texto}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  image: {
    resizeMode: 'contain',
  },
  texto: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
});

export default Status;
