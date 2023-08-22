import { Stack } from "expo-router"
import AppBar from "../src/components/Appbar"

export default function StackLayout() {
    return (
        <>
            <AppBar />
            <Stack>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false,
                }} />
            </Stack>
        </>
    )
}