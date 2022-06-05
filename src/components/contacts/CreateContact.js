import React from 'react';
import {Image, Text} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import colors from '../../assets/theme/colors';
import Button from '../common/button';
import Container from '../common/container';
import Input from '../common/input';
import {DEFAULT_IMAGE_URI} from '../../constants/general';

const NORTH_AMERICA = ['CA', 'MX', 'US'];

const CreateContact = () => {
  return (
    <Container style={{backgroundColor: colors.white}}>
      <Image
        source={{uri: DEFAULT_IMAGE_URI}}
        style={{
          width: 125,
          height: 125,
          alignSelf: 'center',
        }}
      />
      <Text
        style={{
          alignSelf: 'center',
        }}>
        Choose an image
      </Text>
      <Input label="Nom" placeholder="Enter le nom" />
      <Input label="Prénom" placeholder="Enter le prénom" />
      <Input
        iconPosition="left"
        icon={
          <CountryPicker
            withFilter
            withAlphaFilter
            withCallingCode
            withCloseButton={false}
            countryList={NORTH_AMERICA}
            onSelect={contry => {
              console.log(contry);
            }}
          />
        }
        label="Téléphone"
        placeholder="Enter le numéro"
      />
      <Button style={{width: 100}} color="primary" title="Enregister" />
    </Container>
  );
};

export default CreateContact;
