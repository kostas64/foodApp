import MapView from 'react-native-maps';
import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {colors, sizes} from '../constants';
import Screen from '../components/Common/Screen';
import {mapStyle} from '../assets/data/mapStyle';
import MapHeader from '../components/Map/MapHeader';
import MapMarker from '../components/Map/MapMarker';
import {DimensionsUtils} from '../utils/DimensionsUtils';
import MapShopModal from '../components/Map/MapShopModal';
import MapZoomButton from '../components/Map/MapZoomButton';

const MapScreen = ({navigation, route}) => {
  const {shop} = route?.params || {};

  const mapRef = useRef();
  const insets = useSafeAreaInsets();
  const [coords, setCoords] = useState({
    latitude: shop?.coords?.latitude,
    longitude: shop?.coords?.longitude,
    latitudeDelta: 0.03,
    longitudeDelta: 0.03,
  });

  const userCoords = {
    latitude: 40.690100693723096,
    longitude: -73.91689232657055,
  };

  const paddingBottom =
    insets.bottom > 0
      ? insets.bottom + DimensionsUtils.getDP(8)
      : DimensionsUtils.getDP(24);

  const onPressZoom = zoomIn => {
    setCoords(old => ({
      ...old,
      latitudeDelta: zoomIn ? old.latitudeDelta / 1.5 : old.latitudeDelta * 1.5,
      longitudeDelta: zoomIn
        ? old.longitudeDelta / 1.5
        : old.latitudeDelta * 1.5,
    }));

    mapRef.current.animateToRegion(
      {
        latitude: coords?.latitude,
        longitude: coords?.longitude,
        latitudeDelta: zoomIn
          ? coords?.latitudeDelta / 1.5
          : coords?.latitudeDelta * 1.5,
        longitudeDelta: zoomIn
          ? coords?.longitudeDelta / 1.5
          : coords?.longitudeDelta * 1.5,
      },
      400,
    );
  };

  const onPressFindMe = () => {
    setCoords(old => ({
      ...userCoords,
      latitudeDelta: old.latitudeDelta,
      longitudeDelta: old.latitudeDelta,
    }));

    mapRef.current.animateToRegion(
      {
        latitude: 40.690100693723096,
        longitude: -73.91689232657055,
        latitudeDelta: coords?.latitudeDelta,
        longitudeDelta: coords?.longitudeDelta,
      },
      400,
    );
  };

  const onPressBack = () => navigation.pop();

  return (
    <Screen>
      {/* Map with marker */}
      <MapView
        ref={mapRef}
        provider="google"
        initialRegion={coords}
        customMapStyle={mapStyle}
        style={styles.mapContainer}>
        <MapMarker coords={shop.coords} />
        <MapMarker isUser coords={userCoords} />
      </MapView>

      {/* Map header */}
      <MapHeader onPressBack={onPressBack} />

      {/* Map modal */}
      <View style={[styles.modal, styles.shadow, {bottom: paddingBottom}]}>
        <MapShopModal shop={shop} />
      </View>

      {/* Zoom & Gps buttons */}
      <MapZoomButton
        gps
        onPress={onPressFindMe}
        bottom={paddingBottom + DimensionsUtils.getDP(306)}
      />
      <MapZoomButton
        zoomIn
        onPress={() => onPressZoom(true)}
        bottom={paddingBottom + DimensionsUtils.getDP(246)}
      />
      <MapZoomButton
        onPress={() => onPressZoom(false)}
        bottom={paddingBottom + DimensionsUtils.getDP(186)}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    position: 'absolute',
    width: '100%',
    height: '111%',
  },
  modal: {
    borderRadius: DimensionsUtils.getDP(16),
    backgroundColor: colors.white,
    position: 'absolute',
    alignSelf: 'center',
    width: sizes.WIDTH - DimensionsUtils.getDP(40),
  },
  shadow: {
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 5,
  },
});

export default MapScreen;
