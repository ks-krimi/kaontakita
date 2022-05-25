import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import {SIGNIN} from '../../constants/routeNames';
import Button from '../common/button';
import Input from '../common/input';
import styles from './styles';

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  return (
    <>
      <Image
        style={styles.illustration}
        source={require('../../assets/images/Online_world_cuate.png')}
      />
      <Text style={{fontSize: 24, fontWeight: '700'}}>S'inscrire</Text>
      <View
        style={{
          marginTop: 5,
          marginBottom: 20,
          flexDirection: 'row',
        }}>
        <Text>Déjà un compte? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(SIGNIN)}>
          <Text style={{color: colors.primary}}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <Input
        label="Nom complet"
        placeholder="Votre nom complet"
        value={fullName}
        onChangeText={setFullName}
      />
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
      <Button title="S'inscrire" color="primary" />
    </>
  );
};

export default Form;
