import {StyleSheet} from 'react-native';
import theme from '../../../assets/theme/colors';

export default StyleSheet.create({
  root: {},
  overlay: {
    backgroundColor: 'rgba(0,0,0,.3)',
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#FFFFFF',
    minHeight: 300,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 17,
  },
  close: {},
  body: {
    minHeight: 250,
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  separator: {
    height: 0.5,
    backgroundColor: theme.grey,
  },
});
