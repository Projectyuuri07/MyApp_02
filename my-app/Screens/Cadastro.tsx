import React from 'react';
import { View, StyleSheet} from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';
import Botao from '../components/Button';

const Cadastro = () => {
  const BotaoPress = () => {
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>

      <Status title="Cadastre-se" />

      <View style={styles.cadastro}>
        
        <Inputs placeholder="insira seu nome: " title="Nome:"/>

        <Inputs placeholder="insira seu sobrenome: " title="Sobrenome:" />

        <Inputs placeholder="insira seu email:" title="E-mail:"/>

        <Inputs placeholder="insira seu telefone:" title="Telefone"/>

        <Inputs placeholder="insira sua senha:" secureTextEntry title="Senha:"/>

        <Inputs placeholder="insira sua senha novamente:" secureTextEntry title="Confirmar senha:"/>

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
