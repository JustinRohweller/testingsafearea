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
} from "react-native-safe-area-context";
import * as NavigationBar from "expo-navigation-bar";

export default function App() {
  const [isOn, setIsOn] = useState(false);
  const visibility = NavigationBar.useVisibility();
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#ffffff00");
    NavigationBar.setPositionAsync("absolute");
  }, []);

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
          <Text>Toggle</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderOn = () => {
    return (
      <>
        <SafeAreaProvider style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <View style={styles.container}>
            <CSafeArea style={{ flex: 1 }}>{renderButton()}</CSafeArea>
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
          <View style={styles.container}>{renderButton()}</View>
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
