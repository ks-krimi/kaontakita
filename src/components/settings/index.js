import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import Icon from '../common/icon';
import Modal from '../common/modal';
import styles from './styles';

const Setting = ({options = [], setModalVisible, modalVisible, prefArr}) => {
  return (
    <>
      <ScrollView style={styles.root}>
        {options.map(({title, subtitle, onPress}) => (
          <React.Fragment key={title}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
              </View>
            </TouchableOpacity>
            <View style={styles.separator} />
          </React.Fragment>
        ))}
      </ScrollView>
      <Modal
        tapOutside={false}
        visible={modalVisible}
        title="Sort by"
        children={
          <View>
            {prefArr.map(({name, selected, onPress}) => (
              <TouchableOpacity
                key={name}
                onPress={onPress}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                {selected && (
                  <Icon type="MaterialIcons" name="check" size={20} />
                )}
                <Text style={{fontSize: 17, marginLeft: selected ? 10 : 30}}>
                  {name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        }
        setVisible={setModalVisible}
      />
    </>
  );
};

export default Setting;
