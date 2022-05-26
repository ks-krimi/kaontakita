import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import {SIGNUP} from '../../constants/routeNames';
import Button from '../common/button';
import Input from '../common/input';
import Message from '../common/message';
import styles from './styles';

const Form = ({onSubmit, onChange, error, loading}) => {
  const [isSecured, setIsSecured] = useState(true);
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

      {/**  network error message  **/}
      {error?.network && (
        <Message
          color="danger"
          retry
          retryFunc={() => {
            onSubmit();
          }}
          message={error.network}
        />
      )}
      {/* **************** */}

      {/** error message  **/}
      {error && !error?.network && (
        <Message color="danger" onDismis={() => {}} message={error.detail} />
      )}
      {/* **************** */}

      <Input
        label="Pseudo"
        placeholder="Votre pseudo"
        onChangeText={value => {
          onChange({name: 'username', value});
        }}
      />
      <Input
        icon={
          <TouchableOpacity onPress={() => setIsSecured(!isSecured)}>
            <Text>{isSecured ? 'SHOW' : 'HIDE'}</Text>
          </TouchableOpacity>
        }
        secureTextEntry={isSecured}
        label="Mot de passe"
        placeholder="Votre mot de passe"
        onChangeText={value => {
          onChange({name: 'password', value});
        }}
      />
      <Button
        disable={loading}
        loading={loading}
        onPress={onSubmit}
        title="Se connecter"
        color="primary"
      />
    </>
  );
};

export default Form;
