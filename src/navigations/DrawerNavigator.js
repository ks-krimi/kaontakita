import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeNames';
import SideMenu from './menu/SideMenu';
import {GlobalContext} from '../context/Provider';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const {authDispatch} = useContext(GlobalContext);

  return (
    <Drawer.Navigator
      screenOptions={{drawerType: 'slide'}}
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen
        options={{headerShown: false}}
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
      />
    </Drawer.Navigator>
  );
};

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};
export default DrawerNavigator;
