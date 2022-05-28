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

const renderItem = ({item}) => {
  return (
    <TouchableOpacity>
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

const Wrapper = ({modalVisible, setModalVisible, loading, data, error}) => {
  return (
    <SafeAreaView style={styles.root}>
      {loading ? (
        <ActivityIndicator color={colors.primary} size="large" />
      ) : (
        <FlatList
          data={data}
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
              }}></View>
          }
        />
      )}
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
