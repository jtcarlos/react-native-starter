import { Text, View, Button } from "react-native";
import Screen from "@layouts/Screen";

const Home = ({ navigation }) => {
  const handleNavigateToAbout = () => {
    navigation.navigate("About", { page: "About Page Parameter" });
  };

  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="mb-10 text-xl font-bold">Welcome To Home Page</Text>
        <Button onPress={handleNavigateToAbout} title="Go To About Page" />
      </View>
    </Screen>
  );
};

export default Home;
