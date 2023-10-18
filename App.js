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
import Child from "./Child";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#ffffff00");
    NavigationBar.setPositionAsync("absolute");
  }, []);

  const renderOn = () => {
    return (
      <>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <View style={styles.container}>
            <CSafeArea style={{ flex: 1 }}>
              <Child {...{ isOn, setIsOn }} shouldKeepBottomArea />
            </CSafeArea>
          </View>
        </SafeAreaProvider>
      </>
    );
  };
  const renderOff = () => {
    return (
      <>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <View style={styles.container}>
            <Child
              {...{ isOn, setIsOn }}
              shouldKeepTopArea
              shouldKeepBottomArea
            />
          </View>
        </SafeAreaProvider>
      </>
    );
  };
  return isOn ? renderOn() : renderOff();
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
