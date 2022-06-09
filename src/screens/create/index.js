import React, {useContext, useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {New} from '../../components/contacts';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';

const Create = () => {
  const refSheet = useRef(null);
  const {navigate} = useNavigation();
  const [form, setForm] = useState({phone_code: '+261', country_code: 'MG'});
  const {
    contactsDispatch,
    contactsState: {
      createContact: {loading, error},
    },
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    createContact(form)(contactsDispatch)(() => {
      navigate(CONTACT_LIST);
    });
  };

  const toggleValue = () => {
    setForm({...form, isFavorite: !form.isFavorite});
  };

  const openSheet = () => {
    if (refSheet.current) {
      refSheet.current.open();
    }
  };

  const closeSheet = () => {
    if (refSheet.current) {
      refSheet.current.close();
    }
  };

  return (
    <New
      form={form}
      setForm={setForm}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading}
      toggleValue={toggleValue}
      refSheet={refSheet}
      openSheet={openSheet}
      closeSheet={closeSheet}
    />
  );
};

export default Create;
