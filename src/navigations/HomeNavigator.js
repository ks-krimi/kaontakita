import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Contacts = () => {
  return (
    <View>
      <Text>Hello contacts</Text>
    </View>
  );
};

const Create = () => {
  return (
    <View>
      <Text>Hello create contact</Text>
    </View>
  );
};

const Contact = () => {
  return (
    <View>
      <Text>Hello contact</Text>
    </View>
  );
};

const Settings = () => {
  return (
    <View>
      <Text>Hello settings</Text>
    </View>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Contacts">
      <HomeStack.Screen name="Contacts" component={Contacts} />
      <HomeStack.Screen name="Contact" component={Contact} />
      <HomeStack.Screen name="Create Contact" component={Create} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
