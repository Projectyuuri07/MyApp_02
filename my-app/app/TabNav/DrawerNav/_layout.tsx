import CustomDrawer from '@components/customDrawer'
import {Drawer} from 'expo-router/drawer'
import {MaterialIcons} from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useColor } from '../../../temas/temas';


export default function Layout() {
    const cores = useColor()

    return (
        <Drawer drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name='Home'
                options={{
                    headerShown: false,
                    drawerItemStyle: {backgroundColor: cores.bgPrimary},
                    drawerIcon: ({ size, color }) => (
                        <MaterialIcons name='home' size={size} color={color} />
                    )
                }}
            />

            <Drawer.Screen 
                name='Perfil'
                options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="account" size={24} color={cores.textColorPrimaryVariant} />
                    ) 
                }}
            />

            <Drawer.Screen 
                name='Sobre o App'
                options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <Ionicons name="information-circle" size={24} color={cores.textColorPrimaryVariant} />
                    ) 
                }}
            />

            <Drawer.Screen 
                name='Suporte'
                options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <Ionicons name="chatbox-ellipses" size={24} color={cores.textColorPrimaryVariant} />
                    ) 
                }}
            />

            <Drawer.Screen 
                name='Sair'
                options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color={cores.textColorPrimaryVariant} />
                    ) 
                }}
            />

        </Drawer>
    );
}