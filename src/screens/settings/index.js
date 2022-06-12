import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Setting from '../../components/settings';
import {useNavigation} from '@react-navigation/native';

const Settings = () => {
  const [email, setEmail] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const {setOptions} = useNavigation();

  const options = [
    {
      title: 'Mes information',
      subtitle: 'Configurer mon profil',
      onPress: () => {},
    },
    {title: 'Compte', subtitle: null, onPress: () => {}},
    {
      title: 'Compte par défaut',
      subtitle: email,
      onPress: () => {},
    },
    {
      title: 'Contact à afficher',
      subtitle: 'Tous les contacts',
      onPress: () => {},
    },
    {
      title: 'Trier par',
      subtitle: sortBy,
      onPress: () => {
        setModalVisible(true);
      },
    },
    {title: 'Format du nom', subtitle: "Le prénom d'abord", onPress: () => {}},
    {title: 'Import', subtitle: null, onPress: () => {}},
    {title: 'Export', subtitle: null, onPress: () => {}},
    {title: 'Numèros bloqués', subtitle: null, onPress: () => {}},
    {
      title: 'A propos de Kaontakita',
      subtitle: 'Coder aver amour par Nico',
      onPress: () => {},
    },
  ];

  const saveSetting = (key, value) => {
    AsyncStorage.setItem(key, value);
  };

  const prefArr = [
    {
      name: 'Nom',
      selected: sortBy === 'First name',
      onPress: () => {
        saveSetting('sortBy', 'First name');
        setSortBy('First name');
        setModalVisible(false);
      },
    },
    {
      name: 'Prémom',
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
    setOptions({
      title: 'Paramètres',
    });
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
