import {StyleSheet} from 'react-native';
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
    width: 42,
    height: 42,
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
  separator: {},
  fab: {
    backgroundColor: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 20,
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
