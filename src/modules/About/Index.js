import { Text, View, Button } from "react-native";
import Screen from "@layouts/Screen";

const About = ({ navigation, route }) => {
  const handleNavigateToAbout = () => {
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="mb-10 text-xl font-bold">About Page</Text>
        <Text className="mb-10 mx-20">
          A parameter has been passed to this page with the following value:{" "}
          <Text className="font-bold">{route.params.page}</Text>
        </Text>
        <Button onPress={handleNavigateToAbout} title="Return to Home Page" />
      </View>
    </Screen>
  );
};

export default About;
