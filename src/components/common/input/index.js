import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Input = ({
  value,
  onChangeText,
  label,
  icon,
  iconPosition = 'right',
  error,
  style,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const getPosition = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      }
      if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
    return 'row';
  };

  const getError = () => {
    if (!error & focused) {
      return colors.primary;
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.root}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getPosition(), borderColor: getError()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.input, style]}
          placeholder={label}
          onChangeText={text => onChangeText(text)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          value={value}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
