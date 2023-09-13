import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen = ({ statusBarProps, children }) => {
  return (
    <SafeAreaView>
      <View className="h-full">{children}</View>
      <StatusBar style="auto" {...statusBarProps} />
    </SafeAreaView>
  );
};

export default Screen;
