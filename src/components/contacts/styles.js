import {StyleSheet} from 'react-native';
import {max, min} from 'react-native-reanimated';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  item: {
    marginVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    color: colors.white,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  lastmame: {
    fontSize: 15,
  },
  numero: {
    fontWeight: '700',
  },
});

export function getRandomColor() {
  const number = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  switch (number) {
    case 0:
      return colors.secondary;
    case 1:
      return colors.success;
    case 2:
      return colors.danger;
    default:
      return colors.primary;
  }
}
