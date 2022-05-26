import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenu from './menu/SideMenu';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'slide'}}
      drawerContent={({navigation}) => getDrawerContent(navigation)}>
      <Drawer.Screen
        options={{headerShown: false}}
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
};

const getDrawerContent = navigation => {
  return <SideMenu navigation={navigation} />;
};
export default DrawerNavigator;
