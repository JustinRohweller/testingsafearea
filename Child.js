import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  StatusBar as RNStatusBar,
} from "react-native";
import {
  SafeAreaProvider,
  SafeAreaView as CSafeArea,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

export default function Child({
  isOn,
  setIsOn,
  shouldKeepBottomArea,
  shouldKeepTopArea,
}) {
  const insets = useSafeAreaInsets();
  const renderButton = () => {
    return (
      <View
        style={{ backgroundColor: "orange", flex: 1, justifyContent: "center" }}
      >
        <TouchableOpacity
          onPress={() => {
            setIsOn(!isOn);
          }}
        >
          <Text>{isOn ? "On" : "Off"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          // marginTop: -insets.top,
          // marginBottom: -insets.bottom,
          marginTop: shouldKeepTopArea ? 0 : -insets.top,
          marginBottom: shouldKeepBottomArea ? 0 : -insets.bottom,
        }}
      >
        {renderButton()}
      </View>
    </>
  );
}
