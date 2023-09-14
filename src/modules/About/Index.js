import { Text, View, Image } from "react-native";

import Screen from "@layouts/Screen";
import Button from "@interfaces/Button";

const About = ({ navigation, route }) => {
  const handleNavigateToAbout = () => {
    navigation.navigate("Home");
  };

  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Image
          className="w-[200px] h-[200px] mb-10 rounded-full"
          source={{
            uri: "https://jtcarlos.com/images/jpgs/thom.jpg",
          }}
        />
        <Text className="mb-5 text-xl font-bold">John Thomas Carlos</Text>
        <Text className="mb-10  text-center">
          I am BS Computer Engineering graduate from Adamson University,
          currently working at MDi Novare as a Senior Software Engineer. I
          specialize working with / creating software applications. I am mostly
          comfortable with web development, but I have experience with mobile
          and desktop development. I can also work with computer hardware such
          as sensors and micro-controllers.
        </Text>
        <Button
          isFullWidth
          label="Home Page"
          onPress={handleNavigateToAbout}
          icon={{ position: "right", name: "long-arrow-alt-left", size: 15 }}
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

export default About;
