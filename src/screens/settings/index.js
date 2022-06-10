import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Setting from '../../components/settings';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);

  const options = [
    {title: 'My info', subtitle: 'Set up my profile', onPress: () => {}},
    {title: 'Account', subtitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subtitle: email,
      onPress: () => {},
    },
    {title: 'Contact to display', subtitle: 'All contacts', onPress: () => {}},
    {
      title: 'Sort by',
      subtitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {title: 'Name format', subtitle: 'First name first', onPress: () => {}},
    {title: 'Import', subtitle: null, onPress: () => {}},
    {title: 'Export', subtitle: null, onPress: () => {}},
    {title: 'Blocked numbers', subtitle: null, onPress: () => {}},
    {title: 'About contacts', subtitle: null, onPress: () => {}},
  ];

  const saveSetting =  (key, value) => {
     AsyncStorage.setItem(key, value);
  };

  const prefArr = [
    {
      name: 'First name',
      selected: sortBy === 'First name',
      onPress: () => {
        saveSetting('sortBy', 'First name');
        setSortBy('First name');
        setModalVisible(false);
      },
    },
    {
      name: 'Last name',
      selected: sortBy === 'Last name',
      onPress: () => {
         saveSetting('sortBy', 'Last name');
        setSortBy('Last name');
        setModalVisible(false);
      },
    },
  ];

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    setEmail(JSON.parse(user).email);

    const sortPref = await AsyncStorage.getItem('sortBy');
    if (sortPref) {
      setSortBy(sortPref);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Setting
      options={options}
      setModalVisible={setModalVisible}
      modalVisible={modalVisible}
      prefArr={prefArr}
    />
  );
};

export default Settings;
