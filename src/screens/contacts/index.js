import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import React, {
  useLayoutEffect,
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/common/icon';
import {Wrapper} from '../../components/contacts';
import {CONTACT_DETAIL} from '../../constants/routeNames';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/Provider';
import {navigate} from '../../navigations/menu/RootNavigation';

const Contacts = ({navigation}) => {
  const [sortBy, setSortBy] = useState(null);
  const contactRef = useRef([]);

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

  // navigate to the new created contact
  useEffect(() => {
    const previousList = contactRef.current;
    contactRef.current = data;
    const newList = contactRef.current;

    if (newList.length - previousList.length === 1) {
      const newContact = newList.find(
        item => !previousList.map(i => i.id).includes(item.id),
      );
      navigate(CONTACT_DETAIL, {contact: newContact});
    }
  }, [data.length]);

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
