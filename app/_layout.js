import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View, Platform } from 'react-native';
import { Colors } from '../constants/Colors';

export default function RootLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
            <StatusBar style="light" />
            <Stack
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: Colors.background },
                }}
            />
            {Platform.OS === 'web' && (
                <style type="text/css">{`
                    body {
                        background-color: ${Colors.background};
                    }
                `}</style>
            )}
        </View>
    );
}
