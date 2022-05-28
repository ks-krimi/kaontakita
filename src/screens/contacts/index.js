import React, {useLayoutEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/icon';
import {Wrapper} from '../../components/contacts';

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

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Wrapper modalVisible={modalVisible} setModalVisible={setModalVisible} />
  );
};

export default Contacts;
