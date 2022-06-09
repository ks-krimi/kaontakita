import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from '../icon';
import styles from './styles';

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Prendre une photo',
      icon: <Icon name="camera" type="MaterialIcons" size={24} />,
      onPress: () => {},
    },
    {
      name: 'Choisir dans la gallerie',
      icon: <Icon name="image" type="MaterialIcons" size={24} />,
      onPress: () => {},
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}>
      <RBSheet
        ref={ref}
        height={150}
        closeOnPressBack
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          container: styles.container,
          wrapper: styles.wrapper,
          draggableIcon: styles.draggableIcon,
        }}>
        <View style={styles.optionsWrapper}>
          {options.map(({name, icon, onPress}) => (
            <TouchableOpacity
              key={name}
              onPress={onPress}
              style={styles.option}>
              {icon}
              <Text style={styles.text}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </RBSheet>
    </View>
  );
});

export default ImagePicker;
