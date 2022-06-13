import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  wrapper: {
    // backgroundColor: 'transparent',
  },
  draggableIcon: {
    backgroundColor: '#000',
  },
  optionsWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  option: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 10,
    fontSize: 15,
  },
});
