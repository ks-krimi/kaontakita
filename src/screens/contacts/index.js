import React, {useLayoutEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/container';
import Icon from '../../components/common/icon';

const Contacts = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Icon
            style={{paddingRight: 30}}
            type="MaterialIcons"
            name="menu"
            size={25}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Text>Hello contacts</Text>
    </Container>
  );
};

export default Contacts;
