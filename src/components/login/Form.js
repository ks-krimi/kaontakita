import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import {SIGNUP} from '../../constants/routeNames';
import Button from '../common/button';
import Input from '../common/input';
import styles from './styles';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <>
      <Image
        style={styles.illustration}
        source={require('../../assets/images/Messaging_fun_cuate.png')}
      />
      <Text style={{fontSize: 24, fontWeight: '700'}}>Se connecter</Text>
      <View
        style={{
          marginTop: 5,
          marginBottom: 20,
          flexDirection: 'row',
        }}>
        <Text>Nouveau utilisateur? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SIGNUP)}>
          <Text style={{color: colors.primary}}>Créer un compte</Text>
        </TouchableOpacity>
      </View>
      <Input
        label="Email"
        placeholder="Votre email"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        icon={<Text>SHOW</Text>}
        label="Mot de passe"
        placeholder="Votre mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Se connecter" color="primary" />
    </>
  );
};

export default Form;
