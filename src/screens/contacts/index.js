import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {
  useLayoutEffect,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/icon';
import {Wrapper} from '../../components/contacts';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';

const Contacts = ({navigation}) => {
  const [sortBy, setSortBy] = useState(null);

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

  const {
    contactsDispatch,
    contactsState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  const getSettings = async () => {
    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getSettings();
    }, []),
  );

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Wrapper
      loading={loading}
      data={data}
      error={error}
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      sortBy={sortBy}
    />
  );
};

export default Contacts;
