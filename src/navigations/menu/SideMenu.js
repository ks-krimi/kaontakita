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
import logout from '../../context/actions/auth/logout';
import Icon from '../../components/common/icon';
import styles from './styles';

const SideMenu = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    navigation.closeDrawer();
    Alert.alert('Déconnexion', 'Sur de vouloir se déconnecter ?', [
      {
        text: 'Non',
        onPress: () => {},
      },
      {
        text: 'Oui',
        onPress: () => {
          logout()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon type="MaterialIcons" name="settings" size={17} />,
      name: 'Paramètres',
      onPress: () => {
        navigation.closeDrawer();
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon type="MaterialIcons" name="logout" size={17} />,
      name: 'Déconnexion',
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
