import React from 'react';
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from 'react-native';
import Modal from '../common/modal';
import Message from '../common/message';
import colors from '../../assets/theme/colors';
import Icon from '../common/icon';
import styles, {getRandomColor} from './styles';
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT, CONTACT_DETAIL} from '../../constants/routeNames';
import {navigate} from '../../navigations/menu/RootNavigation';

const renderItem = ({item}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(CONTACT_DETAIL, {contact: item});
      }}>
      <View style={styles.item}>
        {item.contact_picture ? (
          <Image style={styles.avatar} source={{uri: item.contact_picture}} />
        ) : (
          <View style={[styles.avatar, {backgroundColor: getRandomColor()}]}>
            <Text style={styles.avatarText}>{item.last_name[0]}</Text>
          </View>
        )}
        <View style={styles.info}>
          <View>
            <Text style={styles.lastmame}> {item.last_name}</Text>
            <Text style={styles.numero}> {item.phone_number}</Text>
          </View>
          <TouchableOpacity>
            <Icon type="MaterialIcons" name="chevron-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Wrapper = ({
  modalVisible,
  setModalVisible,
  loading,
  data,
  sortBy,
  error,
}) => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.root}>
      {loading ? (
        <ActivityIndicator color={colors.primary} size="large" />
      ) : (
        <FlatList
          data={
            sortBy
              ? data.sort((a, b) => {
                  if (sortBy === 'First name') {
                    if (b.first_name > a.first_name) {
                      return -1;
                    } else {
                      return 1;
                    }
                  }
                  if (sortBy === 'Last name') {
                    if (b.last_name > a.last_name) {
                      return -1;
                    } else {
                      return 1;
                    }
                  }
                })
              : data
          }
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <Message color="primary" message="Pas de contacts trouver." />
          }
          ListFooterComponent={
            <View
              style={{
                minHeight: 50,
                alignItems: 'flex-end',
              }}
            />
          }
        />
      )}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigate(CREATE_CONTACT)}>
        <Icon
          type="MaterialIcons"
          color={colors.white}
          name="create"
          size={30}
        />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        setVisible={setModalVisible}
        title="Title"
        footer={
          <>
            <Text>Close</Text>
            <Text>Ok</Text>
          </>
        }>
        <Text>Body</Text>
      </Modal>
    </SafeAreaView>
  );
};

export default Wrapper;
