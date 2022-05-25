import React, {useState} from 'react';
import {Text} from 'react-native';
import Button from '../../components/common/button';
import Container from '../../components/common/container';
import Input from '../../components/common/input';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Input label="Email" value={email} onChangeText={setEmail} />
      <Input
        icon={<Text>ICON</Text>}
        label="Password"
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Sign In" color="primary" loading={true} disable />
      <Button title="Hello" color="danger" />
      <Button title="Bonjour" color="success" />
      <Button title="Holla" color="warning" />
    </Container>
  );
};

export default SignIn;
