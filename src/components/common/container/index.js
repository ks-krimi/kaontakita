import React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';

const Container = ({style, children}) => {
  return (
    <ScrollView>
      <View style={[styles.view, style]}>{children}</View>
    </ScrollView>
  );
};

export default Container;
