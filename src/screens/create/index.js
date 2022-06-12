import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';
import {useNavigation} from '@react-navigation/native';
import {New} from '../../components/contacts';
import {CONTACT_LIST} from '../../constants/routeNames';
import createContact from '../../context/actions/contacts/createContact';
import {GlobalContext} from '../../context/Provider';
import uploadImage from '../../helpers/uploadImage';

const Create = () => {
  const refSheet = useRef(null);
  const {navigate} = useNavigation();
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
    if (localFile?.size) {
      setUploadLoading(true);
      uploadImage(localFile)(url => {
        setUploadLoading(false);
        createContact({...form, contact_picture: url})(contactsDispatch)(() => {
          navigate(CONTACT_LIST);
        });
      })(err => {
        setUploadLoading(false);
      });
    } else {
      createContact(form)(contactsDispatch)(() => {
        navigate(CONTACT_LIST);
      });
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
    console.log(image);
    setLocalFile(image);
    closeSheet();
  };

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
