import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image ,Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Landing from './app/Screens/Landing';
import LoginScreen from './app/Screens/LoginScreen';
import SignupScreen from './app/Screens/SignupScreen';
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import AgencyLogin from './app/Screens/AgencyLogin';
import Test from './app/(tabs)/test';
import Schedule from './app/(tabs)/Schedule';
import DriverScreen from './app/Driver/DriverScreen ';




export default function App() {
  const Stack = createStackNavigator();
  return (
   <>
   <Provider store={store}>
     <NavigationContainer style={styles.container}>
      <SafeAreaProvider >
      <Stack.Navigator>
        <Stack.Screen name="Landing" options={{headerShown:false}} component={Landing} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Signup' component={SignupScreen} />
        <Stack.Screen name='Test' options={{headerShown:false}} component={Test} />
        <Stack.Screen name='Agency Login' component={AgencyLogin} />
        <Stack.Screen name='Schedule' options={{headerShown:false}} component={Schedule} />
        <Stack.Screen name='Driver' options={{headerShown:false}} component={DriverScreen} />
      </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
    </Provider>
      <StatusBar style="auto" />
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
