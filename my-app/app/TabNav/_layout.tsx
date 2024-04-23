import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useColor } from "../../temas/temas";

export default function layout() {
    const cores = useColor();

    return (
        <Tabs screenOptions={{tabBarShowLabel: false,}}>
            <Tabs.Screen name="Scanner" options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="camera-flip" size={size} color={color}/>
                ),
            }} />

            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: cores.bgSecondary
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="format-list-numbered" size={size} color={color}/>
                ),
                tabBarInactiveTintColor: cores.textColorPrimaryVariant,
                headerTitleAlign: 'center',
            }} />

        </Tabs>
    )
}

