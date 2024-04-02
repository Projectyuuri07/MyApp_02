import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Status from '@components/StatusBar';
import Inputs from '@components/Input';
import Botao from '@components/Button';
import { Link } from 'expo-router';

const Cadastro = () => {
  const Cadastrado = () => {
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>

      <Status title="Cadastre-se" />

      <ScrollView contentContainerStyle={styles.cadastro}>

        <View style={styles.inputs}>
          <Inputs placeholder="Insira seu nome" title="Nome:"/>

          <Inputs placeholder="Insira seu sobrenome" title="Sobrenome:" />

          <Inputs placeholder="Insira seu email" title="E-mail:"/>

          <Inputs placeholder="Insira seu telefone" title="Telefone"/>

          <Inputs placeholder="Insira sua senha" secureTextEntry title="Senha:"/>

          <Inputs placeholder="Confirme sua senha" secureTextEntry title="Confirmar senha:"/>

          <Link href="//index" asChild>
            <Botao label="Cadastre-se" onPress={Cadastrado} />
          </Link>

        </View>

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  cadastro: {
    flexGrow: 1,
  },
  inputs: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: '100%',
    width: '100%',
  },
});

export default Cadastro;
