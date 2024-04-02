import { View, StyleSheet, Text } from 'react-native';
import Status from '../../components/StatusBar';
import Inputs from '../../components/Input';
import { Link } from 'expo-router';
import LinkBtn from '../../components/Linkbtn';

const Login = () => {
    
    return (
        <View style={styles.container}>
    
            <Status title="Login" />
    
            <View style={styles.cadastro}>

                <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>

                <Inputs placeholder="Insira seu email:" title="E-mail:"/>
                
                <Inputs placeholder="Insira sua senha:" secureTextEntry title="Senha:"/>
                
                <LinkBtn title="Entrar" href="TabMenu" />

                <View style={styles.linksContainer}>
                    <Link href="TelasIniciais/RecupSenha" asChild>
                        <Text style={styles.linkText} >Esqueceu a senha?</Text>
                    </Link>
                    
                    <Link href="TelasIniciais/Cadastro" asChild>
                        <Text style={styles.linkText} >Cadastre-se</Text>
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
