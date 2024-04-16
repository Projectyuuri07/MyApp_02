import { DrawerItemList } from '@react-navigation/drawer';
import {View, Text} from 'react-native';

export default function CustomDrawer(props: any){
    return (
        <View>
            <Text>CustomDrawer</Text>
            <DrawerItemList {...props} />
        </View>
    )
}