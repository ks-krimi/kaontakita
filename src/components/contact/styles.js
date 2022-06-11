import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/colors';

export default StyleSheet.create({
  root: {
    backgroundColor: theme.white,
    padding: 0,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picture: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  nameWrapper: {
    padding: 20,
  },
  name: {
    fontSize: 23,
    color: theme.black,
  },
  iconsWrapper: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  icon: {
    color: theme.primary,
  },
  separator: {
    height: 0.5,
    backgroundColor: theme.grey,
  },
});
