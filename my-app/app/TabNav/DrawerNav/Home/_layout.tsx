import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";
import { useColor } from "../../../../temas/temas";

export default function layout() {
    const cores = useColor();
    return (
        <Stack>
            <Stack.Screen
                name="Lista"
                options={{
                    headerLeft: () => <DrawerToggleButton />,
                    headerSearchBarOptions: { placeholder: "Pesquisar" },
                    headerStyle: { backgroundColor: cores.bgPatrimonio },
                    headerTitleAlign: 'center',
                    headerTintColor: cores.textColorPrimary,
                }}
            />
        </Stack>
    )
}
