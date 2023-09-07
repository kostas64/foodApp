import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const FormInput = React.forwardRef(
  (
    {
      value,
      label,
      labelColor = 'rgba(0,0,0,0.5)',
      onChange,
      placeholder,
      placeholderTextColor = colors.grey,
      inputStyle,
      containerStyle,
      prependComponent,
      appendComponent,
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
    },
    ref,
  ) => {
    return (
      <View style={{...containerStyle}}>
        {/* Label  */}
        <Text style={[styles.label, {color: labelColor}]}>{label}</Text>

        {/* Input */}
        <View style={styles.inputContainer}>
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
            maxLength={maxLength}
            textAlign={textAlign}
            style={{...inputStyle, flex: 1}}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCompleteType={autoCompleteType}
            autoCapitalize={autoCapitalize}
            onChangeText={onChange}
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

const styles = StyleSheet.create({
  labelAndErrorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
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
    height: DimensionsUtils.getDP(50),
    marginTop: DimensionsUtils.getDP(2),
    borderRadius: DimensionsUtils.getDP(10),
    paddingHorizontal: DimensionsUtils.getDP(20),
    backgroundColor: colors.lightGrey,
  },
});

export default FormInput;
