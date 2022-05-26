import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

const Message = ({message, color, onPress, onDismis, retry, retryFunc}) => {
  const [dismissed, setDismissed] = React.useState(false);

  const getBgColor = () => {
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
    <>
      {!dismissed && (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.root, {backgroundColor: getBgColor()}]}>
          <View style={styles.wrapper}>
            <Text
              style={{
                paddingHorizontal: 5,
                color: colors.white,
                fontWeight: '500',
              }}>
              {message}
            </Text>
            {retry && typeof onDismis !== 'function' && (
              <TouchableOpacity onPress={retryFunc}>
                <Text style={{color: colors.white}}>Retry</Text>
              </TouchableOpacity>
            )}
            {typeof onDismis === 'function' && (
              <TouchableOpacity
                onPress={() => {
                  setDismissed(true);
                  onDismis();
                }}>
                <Text style={{color: colors.white}}>X</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Message;
