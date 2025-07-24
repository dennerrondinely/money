import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerTintColor: colors.primaryContrast,
        headerTitleAlign: 'center',
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarButton: (props)  => <TouchableOpacity {...props} activeOpacity={0.8} />,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
          backgroundColor: colors.background,
        },
      }}
    >
      <Tabs.Screen name="index"
      options={{ 
        title: 'Transações',
        tabBarIcon: ({ color }) => <MaterialIcons name="attach-money" color={color} size={28} />
      }} />
      <Tabs.Screen name="add-transactions" options={{ 
        title: 'Adicionar Transações',
        tabBarLabel: '',
        tabBarIcon: () => (
          <View style={styles.addButton}>
            <MaterialIcons name="add" color={colors.primaryContrast} size={40} />
          </View>
        )
      }} />
      <Tabs.Screen name="summary" options={{ 
        title: 'Resumo',
        tabBarIcon: ({ color }) => <MaterialIcons name="pie-chart" color={color} size={28} />
      }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  addButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: colors.primary,
  },
});
