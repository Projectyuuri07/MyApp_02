import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Status from '@components/StatusBar';
import Inputs from '@components/Input';
import Botao from '@components/Button';
import { Link } from 'expo-router';
import { useColor } from '../../temas/temas';

const Cadastro = () => {
  const Cadastrado = () => {
    alert('Cadastro realizado com sucesso!');
  };

  const cores = useColor();

  console.log(cores);

  return (
    <View style={[styles.container, {backgroundColor: cores.bgSecondary}]}>

      <Status title="Cadastre-se" />

      <ScrollView contentContainerStyle={styles.cadastro}>

        <View style={[styles.inputs, {backgroundColor: cores.bgPrimary}]}>
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
    justifyContent: 'center',
  },
  cadastro: {
    flexGrow: 1,
  },
  inputs: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    height: '100%',
    width: '100%',
  },
});

export default Cadastro;
