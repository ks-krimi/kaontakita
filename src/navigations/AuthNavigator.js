import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SignIn = () => {
  return (
    <View>
      <Text>Hello sign in</Text>
    </View>
  );
};

const SignUp = () => {
  return (
    <View>
      <Text>Hello sign up</Text>
    </View>
  );
};

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
