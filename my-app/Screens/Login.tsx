import { View, StyleSheet, Alert, Text } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';
import Botao from '../components/Button';

const Login = () => {
    const BotaoPress = () => {
        Alert.alert('Login realizado com sucesso!');
    };

    const cadastreSe = () => {
        Alert.alert('Página indisponível no momento! Tente mais tarde!');
    }

    const esqueceuSenha = () => {
        Alert.alert('Página indisponível no momento! Desculpe pelo transtorno!');
    }
    
    return (
        <View style={styles.container}>
    
            <Status title="Login" />
    
            <View style={styles.cadastro}>

                <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>

                <Inputs placeholder="Insira seu email:" secureTextEntry={false} title="E-mail:"/>
        
                <Inputs placeholder="Insira sua senha:" secureTextEntry={true} title="Senha:"/>
        
                <Botao label="Cadastre-se" onPress={BotaoPress} />

                <View style={styles.linksContainer}>
                    <Text style={styles.linkText} onPress={cadastreSe}>
                        Cadastre-se
                    </Text>

                    <Text style={styles.linkText} onPress={esqueceuSenha}>
                        Esqueceu a senha?
                    </Text>
                </View>
        
            </View>
    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
        color: 'blue',
    },
});

export default Login;
