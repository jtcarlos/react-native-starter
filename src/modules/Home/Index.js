import { Text, View } from "react-native";

import Button from "@interfaces/Button";
import Screen from "@layouts/Screen";

const Home = ({ navigation }) => {
  const handleNavigateToAbout = () => {
    navigation.navigate("About", { page: "About Page Parameter" });
  };

  const handleNavigateToAppCounter = () => {
    navigation.navigate("Counter");
  };

  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="mb-5 text-xl font-bold">React Native Starter</Text>
        <Text className="mb-10 text-center">
          This project should serve as a boilerplate for React Native projects
          in the future. Happy Coding!
        </Text>
        <Button
          isFullWidth
          style="mb-5"
          label="Try Out App Counter"
          onPress={handleNavigateToAppCounter}
          colors={{
            icon: "white",
            loader: "blue",
            text: "border-slate-600",
            button: "border border-slate-600",
          }}
        />
        <Button
          isFullWidth
          label="About Developer"
          onPress={handleNavigateToAbout}
          colors={{
            icon: "white",
            loader: "blue",
            text: "text-white",
            button: "bg-slate-600",
          }}
        />
      </View>
    </Screen>
  );
};

export default Home;
