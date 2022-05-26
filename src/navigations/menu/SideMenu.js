import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/container';
import {SETTINGS} from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({navigation}) => {
  const handleLogout = () => {
    navigation.closeDrawer();
    Alert.alert('Déconnexion', 'Sur de vouloir se déconnecter ?', [
      {
        text: 'Non',
        onPress: () => {},
      },
      {
        text: 'Oui',
        onPress: () => {},
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Text>S</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>L</Text>,
      name: 'Logout',
      onPress: handleLogout,
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <Image
          style={styles.illustration}
          source={require('../../assets/images/Messaging_fun_cuate.png')}
        />
        <View>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
