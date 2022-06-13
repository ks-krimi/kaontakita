import {StyleSheet} from 'react-native';
import theme from '../../assets/theme/colors';

export default StyleSheet.create({
  root: {
    backgroundColor: theme.white,
  },
  separator: {
    height: 0.5,
    backgroundColor: theme.grey,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  title: {
    fontSize: 17,
    color: theme.black,
  },
  subtitle: {
    fontSize: 14,
    paddingTop: 5,
  },
});
