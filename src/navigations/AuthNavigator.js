import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import {SIGNIN, SIGNUP} from '../constants/routeNames';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={SIGNIN}>
      <AuthStack.Screen name={SIGNIN} component={SignIn} />
      <AuthStack.Screen name={SIGNUP} component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
