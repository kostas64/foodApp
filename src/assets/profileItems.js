import {images} from '../constants';
import {logout} from '../utils/GenericUtils';

export const PROFILE_ITEMS = [
  {
    label: 'My account',
    icon: images.user,
    onPress: () => {},
  },
  {
    label: 'Orders',
    icon: images.orders,
    onPress: () => {},
  },
  {
    label: 'Addresses',
    icon: images.pin,
    onPress: () => {},
  },
  {
    label: 'Favourites',
    icon: images.heart,
    onPress: () => {},
  },
  {
    label: 'Rates',
    icon: images.rate,
    onPress: () => {},
  },
  {
    label: 'Payment Methods',
    icon: images.wallet,
    onPress: () => {},
  },
  {
    label: 'Support',
    icon: images.support,
    onPress: () => {},
  },
  {
    label: 'Language',
    icon: images.language,
    onPress: () => {},
  },
  {
    label: 'Logout',
    icon: images.logout,
    onPress: navigation => logout(navigation),
  },
];
