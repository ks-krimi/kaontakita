import React, {useLayoutEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Container from '../../components/common/container';

const Contacts = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <MaterialIcons style={{padding: 10}} size={25} name="menu" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Text>Hello contacts here</Text>
    </Container>
  );
};

export default Contacts;
