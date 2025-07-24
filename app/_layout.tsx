import { colors } from '@/constants/colors';
import GlobalState from '@/context/GlobalState';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {

  return (
    <GlobalState>
      <StatusBar backgroundColor={colors.primary} style='light' />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Not Found' }} />
      </Stack>
    </GlobalState>
  );
}
