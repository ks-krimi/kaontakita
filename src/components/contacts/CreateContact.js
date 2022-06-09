import React from 'react';
import {Image, Text, Switch, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import colors from '../../assets/theme/colors';
import Button from '../common/button';
import Container from '../common/container';
import Input from '../common/input';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import {color} from 'react-native-reanimated';

const CreateContact = ({
  error,
  loading,
  form,
  setForm,
  onChange,
  onSubmit,
  toggleValue,
}) => {
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
      <Input
        label="Nom"
        placeholder="Enter le nom"
        onChangeText={value => {
          onChange({name: 'first_name', value});
        }}
        error={error?.first_name?.[0]}
      />
      <Input
        label="Prénom"
        placeholder="Enter le prénom"
        onChangeText={value => {
          onChange({name: 'last_name', value});
        }}
        error={error?.last_name?.[0]}
      />
      <Input
        iconPosition="left"
        icon={
          <CountryPicker
            withFilter
            withAlphaFilter
            withCallingCode
            withCloseButton={false}
            countryCode={form.country_code}
            withCallingCodeButton
            onSelect={({callingCode, cca2}) => {
              setForm({
                ...form,
                phone_code: callingCode[0],
                country_code: cca2,
              });
            }}
          />
        }
        label="Téléphone"
        placeholder="Enter le numéro"
        onChangeText={value => {
          onChange({name: 'phone_number', value});
        }}
        error={error?.phone_number?.[0]}
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 5,
          flexDirection: 'row',
        }}>
        <Text>Ajouter dans le favoris</Text>
        <Switch
          trackColor={{false: colors.grey, true: colors.primary}}
          thumbColor={colors.white}
          onValueChange={toggleValue}
          value={form.isFavorite}
        />
      </View>
      <Button
        loading={loading}
        disable={loading}
        onPress={onSubmit}
        style={{width: 125}}
        color="primary"
        title="Enregister"
      />
    </Container>
  );
};

export default CreateContact;
