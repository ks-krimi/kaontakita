import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  root: {marginBottom: 12},
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  error: {
    fontSize: 12,
    color: colors.danger,
    paddingTop: 4,
  },
});
