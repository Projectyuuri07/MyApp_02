import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';


const Cadastro = () => {
  return (
    <View style={styles.container}>
      <Status/>
      <Text style={styles.texto}>Cadastre-se</Text>

      <View style={styles.cadastro}>

        <View style={styles.cadastro}>
          <Text style={styles.textoinp}>Nome:</Text> 
          <Inputs />

          <Text style={styles.textoinp}>Sobrenome:</Text> 
          <Inputs/> 

          <Text style={styles.textoinp}>E-mail:</Text> 
          <Inputs/> 

          <Text style={styles.textoinp}>Telefone:</Text> 
          <Inputs/> 

          <Text style={styles.textoinp}>Senha:</Text> 
          <Inputs/>

          <Text style={styles.textoinp}>Confirmar Senha:</Text> 
          <Inputs/> 
        </View> 
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 20,
  },
  texto: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 18,
    
  },
  cadastro: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 5,

  },
  textoinp: {
    margin: 10,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Cadastro;
