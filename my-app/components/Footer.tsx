import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import { Link } from 'expo-router';

type Props = {
  color: string;
  ColorIcon: string;
  margem: number;
};

export default function Footbar({ color, ColorIcon, margem }: Props){
    const styles = StyleSheet.create({
        display: {
          width: "100%",
          height: 60,
          bottom: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          position: "absolute",
        },
      });
  return (
    <View style={[styles.display, { backgroundColor: color, borderWidth: margem }]}>
      <Link href="/Scanner" >
        <FontAwesome6 name="camera-rotate" size={30} color={ColorIcon} />
      </Link>
      <FontAwesome5 name="list-ol" size={30} color={ColorIcon} />
    </View>
  );
};




