import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';

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
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={Contact} />
      <HomeStack.Screen name={CREATE_CONTACT} component={Create} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
