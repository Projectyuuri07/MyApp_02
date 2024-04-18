import { DrawerItemList } from '@react-navigation/drawer';
import {View, Text} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { useColor } from '../temas/temas';

export default function CustomDrawer(props: any){
    const cores = useColor();

    const styles = StyleSheet.create({
        caixa: {
            alignItems: 'center',
            padding: 20,
            height: 130,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexDirection: 'row',
        },
        infoUser: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 30,
            textAlign: 'center',
            color: 'gray',
        },
        titulo: {
            fontSize: 18,
            fontWeight: 'bold',
            color: cores.textColorPrimaryVariant
        },
        texto: {
            fontSize: 16,
            color: cores.textColorPrimaryVariant
        },
        container: {
            flex: 1
        }
    });

    return (
        <View style={[styles.container, {backgroundColor: cores.bgPrimary}]}>
            <View style={[styles.caixa, {backgroundColor: cores.bgPrimary}]}>
                <FontAwesome5 name="user-circle" size={80} color={cores.textColorPrimaryVariant} />
                <View style={styles.infoUser}>
                    <Text style={styles.titulo}>Flávio Josefo</Text>
                    <Text style={styles.texto}>flavio@email.com</Text>
                </View>
            </View>
            <DrawerItemList {...props}/>
        </View>
    )
}