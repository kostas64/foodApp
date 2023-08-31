import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const FormInput = ({
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
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
  errorColor = 'tomato',
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* Label * Error */}
      <View style={styles.labelAndErrorContainer}>
        <Text style={[styles.label, {color: labelColor}]}>{label}</Text>
        <Text style={[styles.errorLabel, {color: errorColor}]}>{errorMsg}</Text>
      </View>

      {/* Input */}
      <View style={styles.inputContainer}>
        {prependComponent}
        <TextInput
          value={value}
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
    </View>
  );
};

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
  },
  inputContainer: {
    flexDirection: 'row',
    height: DimensionsUtils.getDP(55),
    marginTop: DimensionsUtils.getDP(8),
    borderRadius: DimensionsUtils.getDP(12),
    paddingHorizontal: DimensionsUtils.getDP(20),
    backgroundColor: colors.lightGrey,
  },
});

export default FormInput;
