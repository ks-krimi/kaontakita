import React, {useState} from 'react';
import {Text} from 'react-native';
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
    </Container>
  );
};

export default SignIn;
