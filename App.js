import react from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import authScreen from './screens/authScreen';

const Stack = createNativeStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
           name='Auth' 
           component={authScreen} 
           options={{
             headerShown: false
           }}
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
