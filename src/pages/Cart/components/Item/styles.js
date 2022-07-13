import { StyleSheet } from 'react-native';
import { colors } from '../../../../styles';

export default StyleSheet.create({
  info: {
    padding: 24
  },
  name: {
    color: colors.orange,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calculation: {
    color: colors.dark,
    fontSize: 14,
    marginVertical: 8,
  },
  price: {
    color: colors.purple,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divider: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
  },
  cart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  description: {
    color: colors.dark,
    fontSize: 16,
    marginRight: 8,
  },
  quantity: {
    width: 42,
  }
});