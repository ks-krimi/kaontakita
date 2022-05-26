import React, {useState} from 'react';
import Container from '../../components/common/container';
import Form from '../../components/register/Form';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

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
  };

  return (
    <Container>
      <Form onSubmit={onSubmit} onChange={onChange} errors={errors} />
    </Container>
  );
};

export default SignUp;
