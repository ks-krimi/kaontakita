import React, {useContext, useEffect} from 'react';
import {View, Alert, ActivityIndicator} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Wrapper} from '../../components/contact';
import Icon from '../../components/common/icon';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GlobalContext} from '../../context/Provider';
import deleteContact from '../../context/actions/contact/deleteContact';
import {navigate} from '../../navigations/menu/RootNavigation';
import {CONTACT_LIST} from '../../constants/routeNames';
import colors from '../../assets/theme/colors';

const Contact = () => {
  const {
    contactsDispatch,
    contactsState: {
      deleteContact: {loading},
    },
  } = useContext(GlobalContext);
  const {setOptions} = useNavigation();
  const {
    params: {contact},
  } = useRoute();

  const handleDelete = () => {
    Alert.alert(
      'Suppression',
      `Sur de vouloir supprimer ${contact.last_name} ?`,
      [
        {
          text: 'Non',
          onPress: () => {},
        },
        {
          text: 'Oui',
          onPress: () => {
            deleteContact(contact.id)(contactsDispatch)(() => {
              navigate(CONTACT_LIST);
            });
          },
        },
      ],
    );
  };

  useEffect(() => {
    if (contact) {
      setOptions({
        title: contact.last_name,
        headerRight: () => (
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity>
              <Icon
                style={{marginRight: 20}}
                type="MaterialIcons"
                name={contact.is_favorite ? 'star' : 'star-border'}
                size={21}
              />
            </TouchableOpacity>
            {loading ? (
              <ActivityIndicator size="small" color={colors.primary} />
            ) : (
              <TouchableOpacity onPress={handleDelete}>
                <Icon type="MaterialIcons" name="delete" size={21} />
              </TouchableOpacity>
            )}
          </View>
        ),
      });
    }
  }, [contact, loading]);

  return <Wrapper contact={contact} />;
};

export default Contact;
