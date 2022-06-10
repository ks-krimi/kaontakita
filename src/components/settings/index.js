import React from 'react';
import {TouchableOpacity, Text, View, ScrollView} from 'react-native';
import styles from './styles';

const Setting = ({options = []}) => {
  return (
    <ScrollView style={styles.root}>
      {options.map(({title, subtitle, onPress}, index) => (
        <>
          <TouchableOpacity key={index} onPress={onPress}>
            <View style={styles.item}>
              <Text style={styles.title}>{title}</Text>
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
          </TouchableOpacity>
          <View key={title} style={styles.separator} />
        </>
      ))}
    </ScrollView>
  );
};

export default Setting;
