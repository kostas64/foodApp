import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {DimensionsUtils} from '../../utils/DimensionsUtils';

const FormInput = React.forwardRef(
  (
    {
      value,
      label,
      labelColor = 'rgba(0,0,0,0.5)',
      onChange,
      placeholder,
      placeholderTextColor,
      inputStyle,
      containerStyle,
      prependComponent,
      appendComponent,
      enterKeyHint,
      secureTextEntry = false,
      keyboardType = 'default',
      autoCompleteType = 'off',
      autoCapitalize = 'none',
      errorMsg = '',
      errorColor = 'tomato',
      textAlign,
      maxLength,
      editable,
      caretHidden,
      onKeyPress,
      blurOnSubmit,
      autoFocus,
      textContentType,
      onSubmitEditing,
      inputContainerStyle,
    },
    ref,
  ) => {
    const {colors} = useTheme();
    const styles = customStyle(colors);

    return (
      <View style={{...containerStyle}}>
        {/* Label  */}
        {!!label && (
          <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
        )}

        {/* Input */}
        <View
          style={[
            styles.inputContainer,
            inputContainerStyle,
            !!label && styles.marginLabel,
          ]}>
          {prependComponent}
          <TextInput
            ref={ref}
            textContentType={textContentType}
            autoFocus={autoFocus}
            blurOnSubmit={blurOnSubmit}
            onKeyPress={onKeyPress}
            caretHidden={caretHidden}
            editable={editable}
            value={value}
            enterKeyHint={enterKeyHint}
            maxLength={maxLength}
            textAlign={textAlign}
            onSubmitEditing={onSubmitEditing}
            style={{...inputStyle, color: colors.black, flex: 1}}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            onChangeText={onChange}
            multiline={false}
          />

          {appendComponent}
        </View>
        {errorMsg && (
          <Text style={[styles.errorLabel, {color: errorColor}]}>
            {errorMsg}
          </Text>
        )}
      </View>
    );
  },
);

const customStyle = colors =>
  StyleSheet.create({
    labelAndErrorContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    label: {
      color: colors.white,
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(12),
    },
    errorLabel: {
      fontFamily: 'Poppins-Regular',
      fontSize: DimensionsUtils.getFontSize(12),
      paddingTop: DimensionsUtils.getDP(4),
      left: DimensionsUtils.getDP(4),
    },
    inputContainer: {
      flexDirection: 'row',
      height: DimensionsUtils.getDP(48),
      borderRadius: DimensionsUtils.getDP(10),
      paddingHorizontal: DimensionsUtils.getDP(20),
      backgroundColor: colors.lightGrey,
    },
    marginLabel: {
      marginTop: DimensionsUtils.getDP(2),
    },
  });

export default FormInput;
