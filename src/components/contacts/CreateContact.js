import React from 'react';
import {Image, Text, Switch, View, TouchableOpacity} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import colors from '../../assets/theme/colors';
import Button from '../common/button';
import Container from '../common/container';
import Input from '../common/input';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import ImagePicker from '../common/imagePicker';

const CreateContact = ({
  error,
  loading,
  form,
  setForm,
  onChange,
  onSubmit,
  refSheet,
  openSheet,
  closeSheet,
  onFileSelected,
  localFile,
}) => {
  return (
    <Container style={{backgroundColor: colors.white}}>
      <Image
        source={{
          uri: form?.contact_picture || localFile?.path || DEFAULT_IMAGE_URI,
        }}
        style={{
          width: 150,
          height: 150,
          alignSelf: 'center',
          borderRadius: 8,
        }}
      />
      <TouchableOpacity onPress={openSheet}>
        <Text
          style={{
            alignSelf: 'center',
          }}>
          Choisir une photo
        </Text>
      </TouchableOpacity>
      <Input
        label="Nom"
        placeholder="Enter le nom"
        onChangeText={value => {
          onChange({name: 'first_name', value});
        }}
        error={error?.first_name?.[0]}
        value={form?.first_name}
      />
      <Input
        label="Prénom"
        placeholder="Enter le prénom"
        onChangeText={value => {
          onChange({name: 'last_name', value});
        }}
        error={error?.last_name?.[0]}
        value={form?.last_name}
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
                country_code: cca2 || form?.country_code,
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
        value={form?.phone_number}
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
          onValueChange={() => {
            setForm({...form, is_favorite: !form.is_favorite});
          }}
          value={form.is_favorite}
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
      <ImagePicker
        onFileSelected={onFileSelected}
        ref={refSheet}
        open={openSheet}
        close={closeSheet}
      />
    </Container>
  );
};

export default CreateContact;
