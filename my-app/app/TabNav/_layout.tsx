import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function layout() {
    return (
        <Tabs screenOptions={{tabBarShowLabel: false,}} >
            <Tabs.Screen name="Scanner" options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="camera-flip" size={size} color={color}/>
                ),
            }} />

            <Tabs.Screen name="DrawerNav" options={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'red',
                },
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="format-list-numbered" size={size} color={color}/>
                ),
                tabBarInactiveTintColor: "#fff",
            }} />

        </Tabs>
    )
}

