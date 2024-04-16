import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack } from "expo-router";

export default function layout() {

    return (
        <Stack>
            <Stack.Screen name="Patrimonio" options={{
                headerLeft: () => <DrawerToggleButton />,
                headerSearchBarOptions: {
                    placeholder: "Pesquisar",
                },
            }}/>
        </Stack>
    )
}