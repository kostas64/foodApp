import {Linking} from 'react-native';
import {CommonActions} from '@react-navigation/native';

export const openURL = async url => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    console.log(`Cant open ${url} - Error :`, e);
  }
};

export const navigateBack = (navigation, from) => {
  if (from === 'Search') {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: 'HomeStack',
            state: {
              routes: [
                {
                  name: 'Home',
                },
              ],
            },
          },
        ],
      }),
    );
  } else {
    navigation.pop();
  }
};

export const logout = navigation => {
  navigation.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: 'Auth'}],
    }),
  );
};
