import { Drawer } from "expo-router/drawer";
import CustomDrawer from "@components/customDrawer";
import { FontAwesome6 } from "@expo/vector-icons";

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
            
        </Drawer>
    );
}
