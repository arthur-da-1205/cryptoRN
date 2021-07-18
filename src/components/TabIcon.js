import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { FONTS, COLORS } from "../constants";

const TabIcon = ({ focused, icon, iconStyle, label, isTrade }) => {
  if (isTrade) {
    return (
      <View style={styles.tradeNav}>
        <Image
          style={{
            width: 25,
            height: 25,
            tintColor: COLORS.white,
            ...iconStyle,
          }}
          source={icon}
          resizeMode="contain"
        />
        <Text style={styles.tradeText}>Trade</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.bottomTabontainer}>
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: focused ? COLORS.white : COLORS.lightGray,
            ...iconStyle,
          }}
        />
        <Text
          style={{
            color: focused ? COLORS.white : COLORS.secondary,
            ...FONTS.h4,
          }}
        >
          {label}
        </Text>
      </View>
    );
  }
};

export default TabIcon;

const styles = StyleSheet.create({
  tradeNav: {
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.black,
  },
  tradeImage: { width: 25, height: 25, tintColor: COLORS.white },
  tradeText: { color: COLORS.white },
  bottomTabontainer: { alignItems: "center", justifyContent: "center" },
  imageTabContainer: {
    width: 25,
    height: 25,
  },
});
