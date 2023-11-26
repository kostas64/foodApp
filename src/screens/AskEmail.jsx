import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation, useTheme} from '@react-navigation/native';

import {images, sizes} from '../constants';
import Logo from '../components/Common/Logo';
import Screen from '../components/Common/Screen';
import Button from '../components/Common/Button';
import FormInput from '../components/Common/FormInput';
import {DimensionsUtils} from '../utils/DimensionsUtils';

const AskEmail = () => {
  const {colors} = useTheme();
  const styles = customStyle(colors);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const validateEmail = value => {
    const isValid = String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

    if (value === '' || !!isValid) {
      setErrorEmail(null);
      return;
    } else {
      setErrorEmail('Provide valid email address');
      return;
    }
  };

  const onPressSendCode = () => {
    let isValid = true;

    if (email.length === 0) {
      setErrorEmail('Provide valid email address');
      isValid = false;
    }

    if (errorEmail || !isValid) return;

    setEmail('');

    navigation.navigate('TypeOtp');
  };

  return (
    <Screen>
      <View style={{flex: 1}}>
        {/* Logo */}
        <Logo />

        <View style={styles.cardContainer}>
          {/* Title & Subtitle */}
          <View style={{marginBottom: DimensionsUtils.getDP(8)}}>
            <Text style={[styles.title, styles.textCenter]}>
              Type your email
            </Text>
            <Text style={[styles.subtitle, styles.textCenter]}>
              We will send you a 4-digit code to your email address
            </Text>
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          <FormInput
            containerStyle={styles.innerCardWidth}
            value={email}
            label={'Email'}
            labelColor={colors.black}
            keyboardType="email-address"
            autoCompleteType="email"
            onChange={value => {
              setEmail(value);
              validateEmail(value);
            }}
            inputStyle={styles.inputStyle}
            errorMsg={errorEmail}
            errorColor={colors.tomato}
            appendComponent={
              <View style={styles.justifyCenter}>
                <Image
                  source={images.correct}
                  style={[
                    styles.image,
                    !errorEmail &&
                      email.length > 0 && {tintColor: colors.green},
                  ]}
                />
              </View>
            }
          />

          {/* Divider */}
          <View style={styles.divider} />

          {/* Send code button */}
          <Button
            label={'Send code'}
            containerStyle={styles.innerCardWidth}
            onPress={onPressSendCode}
          />
        </View>
      </View>
    </Screen>
  );
};

const customStyle = colors =>
  StyleSheet.create({
    textCenter: {
      textAlign: 'center',
    },
    justifyCenter: {
      justifyContent: 'center',
    },
    divider: {
      width: '100%',
      height: DimensionsUtils.getDP(16),
    },
    innerCardWidth: {
      width: sizes.WIDTH - DimensionsUtils.getDP(72),
    },
    cardContainer: {
      borderRadius: DimensionsUtils.getDP(16),
      marginTop: DimensionsUtils.getDP(16),
      paddingVertical: DimensionsUtils.getDP(16),
      paddingHorizontal: DimensionsUtils.getDP(16),
      marginHorizontal: DimensionsUtils.getDP(16),
      backgroundColor: colors.white,
      alignItems: 'center',
    },
    title: {
      color: colors.black,
      fontFamily: 'Poppins-SemiBold',
      fontSize: DimensionsUtils.getFontSize(24),
    },
    subtitle: {
      color: colors.black,
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(16),
      marginVertical: DimensionsUtils.getDP(8),
    },
    image: {
      tintColor: colors.grey,
      width: DimensionsUtils.getDP(16),
      height: DimensionsUtils.getDP(16),
    },
    inputStyle: {
      fontFamily: 'Poppins-Regular',
    },
  });

export default AskEmail;
