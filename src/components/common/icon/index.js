import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getIcon = type => {
  switch (type) {
    case 'Feather':
      return Feather;
    case 'MaterialIcons':
      return MaterialIcons;
    default:
      return MaterialCommunityIcons;
  }
};

const Icon = ({type, name, size, ...props}) => {
  const Icon = getIcon(type);

  return <Icon name={name} size={size} {...props} />;
};

export default Icon;
