import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Screen from '../components/Common/Screen';
import Header from '../components/Common/Header';
import useBackAction from '../hooks/useBackAction';
import {PROFILE_ITEMS} from '../assets/profileItems';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import ProfileListItem from '../components/Profile/ProfileListItem';

const ProfileScreen = () => {
  useBackAction();

  const renderItem = React.useCallback(
    ({item, index}) => (
      <ProfileListItem
        key={index}
        item={item}
        isLast={index === PROFILE_ITEMS.length - 1}
      />
    ),
    [],
  );

  return (
    <Screen>
      <Header label={'Profile'} />
      <FlatList
        bounces={false}
        data={PROFILE_ITEMS}
        renderItem={renderItem}
        style={styles.list}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: DimensionsUtils.getDP(16),
    paddingHorizontal: DimensionsUtils.getDP(20),
  },
});

export default ProfileScreen;
