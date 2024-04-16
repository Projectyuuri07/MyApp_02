import { View, StyleSheet, Text } from 'react-native';
import Status from '@components/StatusBar';
import Inputs from '@components/Input';
import Botao from '@components/Button';
import { Link } from 'expo-router';
import { useColor } from '../../temas/temas';

const RecupSenha = () => {
    const BotaoPress = () => {
        alert('E-mail enviado com sucesso! Aguarde para a recuperação da senha!');
    };

    const cores = useColor();

    console.log(cores);
    
    return (
        <View style={[styles.container, {backgroundColor: cores.bginfo}]}>
    
            <Status title="Recuperação de senha" />
    
            <View style={[styles.cadastro, {backgroundColor: cores.bgPrimary}]}>

                <Text style={[styles.texto, {color: cores.textColorPrimary}]}>Insira seu e-mail para recuperar a senha!</Text>
                
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
        width: '70%',
        margin: 20,
    },

});

export default RecupSenha;