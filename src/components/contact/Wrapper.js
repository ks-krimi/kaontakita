import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {CREATE_CONTACT} from '../../constants/routeNames';
import {navigate} from '../../navigations/menu/RootNavigation';
import Button from '../common/button';
import Container from '../common/container';
import Icon from '../common/icon';
import Picture from './Picture';
import styles from './styles';

const Wrapper = ({contact}) => {
  const {
    id,
    first_name,
    last_name,
    phone_number,
    country_code,
    is_favorite,
    contact_picture,
  } = contact;

  const icons = [
    {
      text: 'Call',
      icon: (
        <Icon style={styles.icon} type="MaterialIcons" name="call" size={24} />
      ),
    },
    {
      text: 'Message',
      icon: (
        <Icon
          style={styles.icon}
          type="MaterialIcons"
          name="message"
          size={24}
        />
      ),
    },
    {
      text: 'Video',
      icon: <Icon style={styles.icon} name="video" size={28} />,
    },
  ];
  return (
    <Container style={styles.root}>
      <Picture src={contact_picture} />
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>
          {first_name} {last_name}
        </Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.iconsWrapper}>
        {icons.map(({text, icon}) => (
          <TouchableOpacity key={text} style={{alignItems: 'center'}}>
            {icon}
            <Text>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.separator} />
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 20,
          paddingHorizontal: 25,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon
            style={styles.icon}
            type="MaterialIcons"
            name="call"
            size={24}
          />
          <View style={{paddingLeft: 20}}>
            <Text>{phone_number}</Text>
            <Text>Mobile</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Icon style={styles.icon} name="video" size={28} />
          <Icon
            style={[styles.icon, {paddingHorizontal: 20}]}
            type="MaterialIcons"
            name="message"
            size={24}
          />
        </View>
      </View>
      <View style={styles.separator} />
      <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
        <Button
          color="primary"
          style={{width: 150, alignSelf: 'flex-end'}}
          title="Modifier contact"
          onPress={() => {
            navigate(CREATE_CONTACT, {editing: true, contact});
          }}
        />
      </View>
    </Container>
  );
};

export default Wrapper;
