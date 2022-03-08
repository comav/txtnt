import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthScreen from './screens/authScreen';
import MainScreen from './screens/mainScreen';

const Stack = createNativeStackNavigator();
const store = configureStore();

function AuthScreenGroup({ route, navigation }, props) {
  return (
        <Stack.Navigator>
          <Stack.Screen
           name='Auth' 
           component={AuthScreen} 
           options={{
             headerShown: false
           }}
          />
        </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Auth-group"
            component={AuthScreenGroup}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='Main'
            component={MainScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
