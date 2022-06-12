import React, {useContext, useState, useRef, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {New} from '../../components/contacts';
import {CONTACT_DETAIL, CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';
import editContact from '../../context/actions/contact/editContact';

const Create = () => {
  const {params} = useRoute();
  const refSheet = useRef(null);
  const {navigate, setOptions} = useNavigation();
  const [form, setForm] = useState({
    phone_code: '+261',
    country_code: 'MG',
    is_favorite: false,
  });
  const [localFile, setLocalFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
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
    if (params?.editing) {
      // update contact
      if (localFile?.size) {
        setUploadLoading(true);
        uploadImage(localFile)(url => {
          setUploadLoading(false);
          editContact(params.contact.id, {...form, contact_picture: url})(
            contactsDispatch,
          )(contact => {
            navigate(CONTACT_DETAIL, {contact});
          });
        })(err => {
          setUploadLoading(false);
        });
      } else {
        editContact(params.contact.id, form)(contactsDispatch)(contact => {
          navigate(CONTACT_DETAIL, {contact});
        });
      }
    } else {
      // create new contact
      if (localFile?.size) {
        setUploadLoading(true);
        uploadImage(localFile)(url => {
          setUploadLoading(false);
          createContact({...form, contact_picture: url})(contactsDispatch)(
            () => {
              navigate(CONTACT_LIST);
            },
          );
        })(err => {
          setUploadLoading(false);
        });
      } else {
        createContact(form)(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      }
    }
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

  const onFileSelected = image => {
    setLocalFile(image);
    closeSheet();
  };

  useEffect(() => {
    if (params?.contact) {
      setForm(params.contact);

      setOptions({
        title: `${params.contact.first_name} ${params.contact.last_name}`,
      });
    }
  }, [params?.editing]);

  return (
    <New
      form={form}
      setForm={setForm}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      loading={loading || uploadLoading}
      refSheet={refSheet}
      openSheet={openSheet}
      closeSheet={closeSheet}
      onFileSelected={onFileSelected}
      localFile={localFile}
    />
  );
};

export default Create;
