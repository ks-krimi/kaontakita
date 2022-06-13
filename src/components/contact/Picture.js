import React, {useState} from 'react';
import {Image, Text, View, ActivityIndicator} from 'react-native';
import {DEFAULT_IMAGE_URI} from '../../constants/general';
import styles from './styles';

const Picture = ({src}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLoadStart = () => {
    setLoading(true);
  };

  const onLoadEnd = () => {
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError("Une erreur pendant le chargement de l'image");
  };

  return (
    <View style={styles.imageContainer}>
      {loading && <ActivityIndicator />}
      {error && <Text>{error}</Text>}
      <Image
        style={styles.picture}
        source={{uri: src || DEFAULT_IMAGE_URI}}
        onLoadStart={onLoadStart}
        onLoadEnd={onLoadEnd}
        onError={onError}
      />
    </View>
  );
};

export default Picture;
