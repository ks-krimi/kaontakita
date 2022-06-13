import React, {useState, useContext} from 'react';
import Container from '../../components/common/container';
import {Form} from '../../components/login';
import {GlobalContext} from '../../context/Provider';
import login from '../../context/actions/auth/login';

const SignIn = () => {
  const [form, setForm] = useState({});

  const {
    authDispatch,
    authState: {loading, error},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    login(form)(authDispatch);
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        error={error}
        loading={loading}
      />
    </Container>
  );
};

export default SignIn;
