import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Status from '@components/StatusBar';
import Inputs from '@components/Input';
import { useColor } from '../../temas/temas';
import LinkBtn from '@components/Linkbtn';

const Cadastro = () => {
  const cores = useColor();

  return (
    <View style={[styles.container, {backgroundColor: cores.bgSecondary}]}>
      <Status title="Cadastre-se"/>
      <ScrollView contentContainerStyle={styles.cadastro}>

        <View style={[styles.inputs, {backgroundColor: cores.bgPrimary}]}>
          <Inputs placeholder="Insira seu nome" title="Nome:"/>
          <Inputs placeholder="Insira seu sobrenome" title="Sobrenome:" />
          <Inputs placeholder="Insira seu email" title="E-mail:"/>
          <Inputs placeholder="Insira seu telefone" title="Telefone"/>
          <Inputs placeholder="Insira sua senha" secureTextEntry title="Senha:"/>
          <Inputs placeholder="Confirme sua senha" secureTextEntry title="Confirmar senha:"/>
          <LinkBtn title="Entrar" href="TelasIniciais/Login" />
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
