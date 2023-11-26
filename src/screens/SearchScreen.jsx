import React from 'react';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {StyleSheet, FlatList, Keyboard, useColorScheme} from 'react-native';

import {shops} from '../assets/data/shops';
import Screen from '../components/Common/Screen';
import useBackAction from '../hooks/useBackAction';
import FormInput from '../components/Common/FormInput';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import SearchListItem from '../components/Search/SearchListItem';
import SearchDeleteInput from '../components/Search/SearchDeleteInput';

const SearchScreen = () => {
  let timeout;
  const {colors} = useTheme();
  const inputRef = React.useRef();
  const scheme = useColorScheme();
  const isFocused = useIsFocused();
  const [input, setInput] = React.useState('');
  const [typing, setTyping] = React.useState(false);

  const backgroundColor = scheme === 'dark' ? 'grey' : 'white';

  const CloseButton = (
    <SearchDeleteInput typing={typing} onPress={() => setInput('')} />
  );

  const SearchBar = (
    <FormInput
      ref={inputRef}
      value={input}
      onChange={setInput}
      placeholder={'Search shop'}
      placeholderTextColor={colors.grey}
      appendComponent={CloseButton}
      containerStyle={styles.searchPadding}
      inputContainerStyle={{backgroundColor}}
    />
  );

  React.useEffect(() => {
    clearTimeout(timeout);

    //Call API when user stop typing
    if (!!input) {
      setTyping(true);

      timeout = setTimeout(() => {
        setTyping(false);
      }, 250);
    } else {
      typing && setTyping(false);
    }

    return () => !!timeout && clearTimeout(timeout);
  }, [input]);

  React.useEffect(() => {
    if (!isFocused) {
      setInput('');
    } else {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  const renderItem = React.useCallback(
    ({item, index}) => <SearchListItem item={item} key={index} />,
    [],
  );

  useBackAction();

  return (
    <Screen>
      <FlatList
        bounces={false}
        onScroll={() => Keyboard.dismiss()}
        renderItem={renderItem}
        style={styles.container}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={SearchBar}
        keyboardShouldPersistTaps={'handled'}
        data={!typing && input.length > 0 ? shops : null}
        contentContainerStyle={styles.listContentContainer}
      />
    </Screen>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingHorizontal: DimensionsUtils.getDP(20),
  },
  searchPadding: {
    paddingBottom: DimensionsUtils.getDP(8),
  },
  listContentContainer: {
    paddingBottom: DimensionsUtils.getDP(128),
  },
});
