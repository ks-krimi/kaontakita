import React from 'react';
import Container from '../../components/common/container';
import Setting from '../../components/settings';

const Settings = () => {
  const options = [
    {title: 'My info', subtitle: 'Set up my profile', onPress: () => {}},
    {title: 'Account', subtitle: null, onPress: () => {}},
    {
      title: 'Default account for new contacts',
      subtitle: 'ny.kalash@gmail.com',
      onPress: () => {},
    },
    {title: 'Contact to display', subtitle: 'All contacts', onPress: () => {}},
    {title: 'Sort by', subtitle: 'First name', onPress: () => {}},
    {title: 'Name format', subtitle: 'First name first', onPress: () => {}},
    {title: 'Import', subtitle: null, onPress: () => {}},
    {title: 'Export', subtitle: null, onPress: () => {}},
    {title: 'Blocked numbers', subtitle: null, onPress: () => {}},
    {title: 'About contacts', subtitle: null, onPress: () => {}},
  ];

  return <Setting options={options} />;
};

export default Settings;
