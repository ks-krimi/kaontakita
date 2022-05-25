import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  Button as RNButton,
} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Button = ({title, color, loading, disable, onPress}) => {
  const getBgColor = () => {
    if (disable) {
      return colors.grey;
    }
    switch (color) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'danger':
        return colors.danger;
      case 'success':
        return colors.success;
      case 'warning':
        return colors.warning;
      default:
        return colors.grey;
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={[styles.root, {backgroundColor: getBgColor()}]}>
      <View style={styles.wrapper}>
        {loading && (
          <ActivityIndicator color={colors.white} style={styles.loader} />
        )}
        <Text style={{paddingHorizontal: 5, color: colors.white}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
