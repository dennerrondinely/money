import { colors } from '@/constants/colors';
import GlobalState from '@/context/GlobalState';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function RootLayout() {
  const insets = useSafeAreaInsets();
 
  return (
    <GlobalState>
      <StatusBar backgroundColor={colors.primary} style='light' />
      <View style={{ paddingBottom: insets.bottom, flex: 1, backgroundColor: colors.primary }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
        </Stack>
      </View>
    </GlobalState>
  );
}
