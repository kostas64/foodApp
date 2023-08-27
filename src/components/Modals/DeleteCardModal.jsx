import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../../constants';
import {DimensionsUtils} from '../../utils/DimensionsUtils';

const DeleteCardModal = ({item, onDelete = () => {}, onCancel = () => {}}) => {
  return (
    <View style={styles.container}>
      {/* Title & Subtitle */}
      <Text style={styles.title}>{`Delete card ${item.digits}`}</Text>
      <Text style={styles.subtitle}>{`Are you sure you want to proceed?`}</Text>

      {/* Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onDelete} style={styles.buttonContainer}>
          <Text style={styles.buttonLabel}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel} style={styles.buttonContainer2}>
          <Text style={styles.buttonLabel2}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: DimensionsUtils.getDP(16),
  },
  title: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: DimensionsUtils.getDP(18),
    paddingBottom: DimensionsUtils.getDP(8),
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getDP(16),
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: DimensionsUtils.getDP(24),
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: colors.orange,
    alignItems: 'center',
    borderRadius: DimensionsUtils.getDP(16),
    marginRight: DimensionsUtils.getDP(16),
  },
  buttonLabel: {
    paddingVertical: DimensionsUtils.getDP(12),
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(18),
    color: colors.white,
  },
  buttonContainer2: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    borderRadius: DimensionsUtils.getDP(16),
    borderColor: colors.lightGrey,
    borderWidth: 1,
  },
  buttonLabel2: {
    paddingVertical: DimensionsUtils.getDP(12),
    fontFamily: 'Poppins-Regular',
    fontSize: DimensionsUtils.getFontSize(18),
    color: colors.black,
  },
});

export default DeleteCardModal;
