import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';

const Container = ({style, children}) => {
  return (
    <ScrollView style={[styles.view, style]}>
      <View>{children}</View>
    </ScrollView>
  );
};

export default Container;
