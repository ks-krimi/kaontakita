import React, {useState, useContext, useEffect, useCallback} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Container from '../../components/common/container';
import Form from '../../components/register/Form';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {SIGNIN} from '../../constants/routeNames';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {loading, error, data},
  } = useContext(GlobalContext);

  useEffect(() => {
    if (data) {
      navigate(SIGNIN);
    }
  }, [data]);

  useFocusEffect(
    useCallback(() => {
      // console.log('hello');
      return () => {
        // console.log('Bey');
        if (data || errors) {
          clearAuthState()(authDispatch);
        }
      };
    }, [data, errors]),
  );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
    if (value !== '') {
      if (name === 'password') {
        if (value.length <= 5) {
          setErrors(prev => {
            return {...prev, [name]: 'Mot de passe trop court'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'Le champ est encore vide'};
      });
    }
  };

  const onSubmit = () => {
    // validation
    if (!form.username) {
      setErrors(prev => {
        return {...prev, username: 'Le pseudo est vide'};
      });
    }
    if (!form.firstname) {
      setErrors(prev => {
        return {...prev, firstname: 'Le nom est vide'};
      });
    }
    if (!form.lastname) {
      setErrors(prev => {
        return {...prev, lastname: 'Le prénom est vide'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: "L'email est vide"};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Le mot de passe est vide'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      register(form)(authDispatch);
    }
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        errors={errors}
        error={error}
        loading={loading}
      />
    </Container>
  );
};

export default SignUp;
