import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Status from '@components/StatusBar';
import Inputs from '@components/Input';
import { Link } from 'expo-router';
import LinkBtn from '@components/Linkbtn';
import { useColor } from '../../temas/temas';

const Login = () => {
    const cores = useColor();

    return (
        <View style={[styles.container, { backgroundColor: cores.bgSecondary }]}>
            <Status title="Login" />
            <View style={[styles.cadastro, { backgroundColor: cores.bgPrimary }]}>
                <Text style={[styles.texto, { color: cores.textColorPrimary }]}>Faça Login para Acessar o Sistema!</Text>
                <Inputs placeholder="Insira seu email:" title="E-mail:"/>
                <Inputs placeholder="Insira sua senha:" secureTextEntry title="Senha:" />
                <LinkBtn title="Entrar" href="TabNav" />
                <View style={styles.linksContainer}>
                    <Link href="TelasIniciais/RecupSenha" asChild>
                        <Text style={[styles.linkText, { color: cores.bginfo }]}>Esqueceu a senha?</Text>
                    </Link>
                    <Link href="TelasIniciais/Cadastro" asChild>
                        <Text style={[styles.linkText, { color: cores.bginfo }]}>Cadastre-se</Text>
                    </Link>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cadastro: {
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20,
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
    },
    linkText: {
        fontSize: 15,
    },
});

export default Login;
