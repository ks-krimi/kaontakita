import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Wrapper} from '../../components/contact';
import Icon from '../../components/common/icon';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Contact = () => {
  const {setOptions} = useNavigation();

  const {
    params: {contact},
  } = useRoute();

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
            <TouchableOpacity>
              <Icon type="MaterialIcons" name="delete" size={21} />
            </TouchableOpacity>
          </View>
        ),
      });
    }
  }, [contact]);

  return <Wrapper contact={contact} />;
};

export default Contact;
