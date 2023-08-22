import { Tabs } from "expo-router"
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: () => <Feather name="home" size={24} color="black" />
            }} />
            {/* <Tabs.Screen name="signin" options={{
                title: "Sign In",
                headerShown: false,
                tabBarIcon: () => <FontAwesome name="user-circle" size={24} color="black" />
            }} /> */}
        </Tabs>
    )
}