import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/auth/RegisterScreen';

import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Register"
          component={RegisterScreen} 
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}