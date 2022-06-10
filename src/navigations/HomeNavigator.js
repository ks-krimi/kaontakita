import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from '../screens/contacts';
import Contact from '../screens/contact';
import Create from '../screens/create';
import Settings from '../screens/settings';
import Logout from '../components/logout';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
  LOGOUT,
} from '../constants/routeNames';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={Contact} />
      <HomeStack.Screen name={CREATE_CONTACT} component={Create} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={LOGOUT} component={Logout} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
