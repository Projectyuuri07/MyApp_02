import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@components/customDrawer";
import { FontAwesome6 } from "@expo/vector-icons";
import { DrawerItem } from "@react-navigation/drawer";

export default function Layout() {
    return (
        <Drawer  drawerContent={(props) => (
            <CustomDrawer {...props} />
        )}>
            <Drawer.Screen name="Home" options={{
                headerShown: false, 
                drawerIcon: ({size, color}) => (
                    <FontAwesome6 name="user-large" size={size} color={color} />
                )
            }} />
            <DrawerItem
                label="Sobre o App"
                icon={({size, color}) => (
                    <FontAwesome6 name="info-circle" size={size} color={color} />
                )}
                onPress={() => {
                    // Lógica para navegar para a tela "Sobre o App"
                }}
            />
            <DrawerItem
                label="Suporte"
                icon={({size, color}) => (
                    <FontAwesome6 name="support" size={size} color={color} />
                )}
                onPress={() => {
                    // Lógica para navegar para a tela de "Suporte"
                }}
            />
            <DrawerItem
                label="Sair"
                icon={({size, color}) => (
                    <FontAwesome6 name="exit" size={size} color={color} />
                )}
                onPress={() => {
                    // Lógica para sair do aplicativo
                }}
            />
        </Drawer>
    );
}
