// App.tsx
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FormScreen from './src/screens/FormScreen';
import LinktreeScreen from './src/screens/LinktreeScreen';

export type RootStackParamList = {
  Form: undefined;
  Linktree: {
    photo: string;
    whatsapp: string;
    linkedin: string;
    github: string;
    portfolio: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // tiramos header padrão
        }}
      >
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Linktree" component={LinktreeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


