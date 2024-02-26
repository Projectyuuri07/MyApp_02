import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';
import Botao from '../components/Button';

const Cadastro = () => {
  const BotaoPress = () => {
    Alert.alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>

      <Status title="Cadastre-se" />

      <View style={styles.cadastro}>
        
        <Inputs placeholder="insira seu nome: " secureTextEntry={false} title="Nome:"/>

        <Inputs placeholder="insira seu sobrenome: " secureTextEntry={false} title="Sobrenome:" />

        <Inputs placeholder="insira seu email:" secureTextEntry={false} title="E-mail:"/>

        <Inputs placeholder="insira seu telefone:" secureTextEntry={false} title="Telefone"/>

        <Inputs placeholder="insira sua senha:" secureTextEntry={true} title="Senha:"/>

        <Inputs placeholder="insira sua senha novamente:" secureTextEntry={true} title="Confirmar senha:"/>

        <Botao label="Cadastre-se" onPress={BotaoPress} />

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  cadastro: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 10,
  },
});

export default Cadastro;
