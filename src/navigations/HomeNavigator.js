import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Contacts from '../screens/contacts';
import Contact from '../screens/contact';
import Create from '../screens/create';
import Settings from '../screens/settings';
import {
  CONTACT_DETAIL,
  CONTACT_LIST,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/routeNames';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = ({navigation}) => {
  return (
    <HomeStack.Navigator
      initialRouteName={CONTACT_LIST}
      screenOptions={{
        headerLeft: () => (
          <Text
            style={{paddingRight: 10}}
            onPress={() => {
              navigation.openDrawer();
            }}>
            ICON
          </Text>
        ),
      }}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={Contact} />
      <HomeStack.Screen name={CREATE_CONTACT} component={Create} />
      <HomeStack.Screen name={SETTINGS} component={Settings} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
