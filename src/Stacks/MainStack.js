import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  FilmScreen,
  PilotScreen,
  PlanetScreen,
  DetailScreen,
  SpecieScreen,
  VehicleScreen,
  ResidentScreen,
  StarShipScreen,
  CharacterScreen,
} from '../Screens';

import { NavigationStrings } from '../Contants';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={NavigationStrings.PLANET_SCREEN}
      screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}>
      <Stack.Screen
        name={NavigationStrings.FILM_SCREEN}
        component={FilmScreen}
      />
      <Stack.Screen
        name={NavigationStrings.PILOT_SCREEN}
        component={PilotScreen}
      />
      <Stack.Screen
        name={NavigationStrings.PLANET_SCREEN}
        component={PlanetScreen}
      />
      <Stack.Screen
        name={NavigationStrings.DETAIL_SCREEN}
        component={DetailScreen}
      />
      <Stack.Screen
        name={NavigationStrings.SPECIE_SCREEN}
        component={SpecieScreen}
      />
      <Stack.Screen
        name={NavigationStrings.VEHICLE_SCREEN}
        component={VehicleScreen}
      />
      <Stack.Screen
        name={NavigationStrings.RESIDENT_SCREEN}
        component={ResidentScreen}
      />
      <Stack.Screen
        name={NavigationStrings.STARSHIP_SCREEN}
        component={StarShipScreen}
      />
      <Stack.Screen
        name={NavigationStrings.CHARACTER_SCREEN}
        component={CharacterScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainStack;
