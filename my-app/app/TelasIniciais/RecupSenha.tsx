import { View, StyleSheet, Text } from 'react-native';
import Status from '@components/StatusBar';
import Inputs from '@components/Input';
import { useColor } from '../../temas/temas';
import LinkBtn from '@components/Linkbtn';

const RecupSenha = () => {
    const cores = useColor();

    return (
        <View style={[styles.container, {backgroundColor: cores.bgTertiary}]}>
            <Status title="Recuperação de senha" />
            <View style={[styles.cadastro, {backgroundColor: cores.bgPrimary}]}>
                <Text style={[styles.texto, {color: cores.textColorPrimary}]}>Insira seu e-mail para recuperar a senha!</Text>
                <Inputs placeholder="insira seu email:" title="E-mail:"/>
                <LinkBtn title="Entrar" href="TelasIniciais/Login" />
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