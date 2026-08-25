import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Platform } from 'react-native';
import { Colors } from '../constants/Colors';
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <StatusBar style="dark" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: Colors.background },
                }}
            />
            {Platform.OS === 'web' && (
                <style type="text/css">{`
                    *, *::before, *::after { box-sizing: border-box; }
                    html { scroll-behavior: smooth; }
                    body {
                        background-color: ${Colors.background};
                        font-family: 'Inter', sans-serif;
                        margin: 0;
                        padding: 0;
                        overflow-x: hidden;
                        color: ${Colors.text};
                        -webkit-font-smoothing: antialiased;
                    }
                    /* Links and pressables should feel interactive, never selectable-on-drag. */
                    a { text-decoration: none; color: inherit; }
                    [role="button"], button { cursor: pointer; }
                    ::-webkit-scrollbar { width: 6px; }
                    ::-webkit-scrollbar-track { background: ${Colors.background}; }
                    ::-webkit-scrollbar-thumb { background: ${Colors.borderStrong}; border-radius: 3px; }
                    ::-webkit-scrollbar-thumb:hover { background: #9a9a9a; }
                `}</style>
            )}
        </View>
    );
}
