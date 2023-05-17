import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/index';
import MainNavigator from './navigation/main';
import { styles } from './styles';
export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
      <StatusBar style="auto"/>
    </View>
  );
}

