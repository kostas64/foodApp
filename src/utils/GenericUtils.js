import {Linking} from 'react-native';

export const openURL = async url => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Cant open ${url} - Error :`, e);
  }
};
