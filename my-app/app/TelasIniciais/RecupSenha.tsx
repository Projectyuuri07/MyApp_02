import { View, StyleSheet, Text } from 'react-native';
import Status from '../../components/StatusBar';
import Inputs from '../../components/Input';
import Botao from '../../components/Button';
import { Link } from 'expo-router';

const RecupSenha = () => {
    const BotaoPress = () => {
        alert('E-mail enviado com sucesso! Aguarde para a recuperação da senha!');
    };
    
    return (
        <View style={styles.container}>
    
            <Status title="Recuperação de senha" />
    
            <View style={styles.cadastro}>

                <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
                
                <Inputs placeholder="insira seu email:" title="E-mail:"/>
                
                <Link href="//index" asChild>
                    <Botao label="Cadastre-se" onPress={BotaoPress} />
                </Link>
        
            </View>
    
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#011E83',
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
        width: '70%',
        margin: 20,
    },

});

export default RecupSenha;