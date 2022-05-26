import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import {SIGNIN} from '../../constants/routeNames';
import Button from '../common/button';
import Input from '../common/input';
import styles from './styles';

const Form = ({onSubmit, onChange, errors}) => {
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
        label="Pseudo"
        placeholder="Votre pseudo"
        onChangeText={value => {
          onChange({name: 'pseudo', value});
        }}
        error={errors.pseudo}
      />
      <Input
        label="Email"
        placeholder="Votre email"
        onChangeText={value => {
          onChange({name: 'email', value});
        }}
        error={errors.email}
      />
      <Input
        icon={<Text>SHOW</Text>}
        label="Mot de passe"
        placeholder="Votre mot de passe"
        secureTextEntry={true}
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
        error={errors.password}
      />
      <Button onPress={onSubmit} title="S'inscrire" color="primary" />
    </>
  );
};

export default Form;
