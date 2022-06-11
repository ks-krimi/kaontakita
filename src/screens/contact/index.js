import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Wrapper} from '../../components/contact';

const Contact = () => {
  const {
    params: {contact},
  } = useRoute();

  return <Wrapper contact={contact} />;
};

export default Contact;
