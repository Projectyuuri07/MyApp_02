import { View, StyleSheet, Text } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';
import Botao from '../components/Button';
import { Link } from 'expo-router';

const Login = () => {
    const Entrar = () => {
        alert('Login realizado com sucesso!');
    };

    
    return (
        <View style={styles.container}>
    
            <Status title="Login" />
    
            <View style={styles.cadastro}>

                <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>

                <Inputs placeholder="Insira seu email:" title="E-mail:"/>
                
                <Inputs placeholder="Insira sua senha:" secureTextEntry title="Senha:"/>

                <Link href="/Patrimonio" asChild>
                    <Botao label="Entrar" onPress={Entrar} />
                </Link>

                <View style={styles.linksContainer}>
                    <Link href="/Cadastro" asChild>
                        <Text style={styles.linkText} >Cadastre-se</Text>
                    </Link>

                    <Link href="/RecupSenha" asChild>
                        <Text style={styles.linkText} >Esqueceu a senha?</Text>
                    </Link>
                    
                </View>
        
            </View>
    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101010',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cadastro: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    texto: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        padding: 20,
        
    },
    linksContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 9,
        fontSize: 20,
    },
    linkText: {
        color: '#011E83',
    },
});

export default Login;
