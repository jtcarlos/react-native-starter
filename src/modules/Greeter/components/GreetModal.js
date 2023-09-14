import { connect } from "react-redux";
import { View, Text } from "react-native";

import Button from "@interface/Button";

const GreetModal = ({ name, setIsGreetingVisible }) => {
  return (
    <View className="bg-[#000]/75 flex-1 flex-row items-center justify-center">
      <View className="bg-white flex-1 p-5 mx-6 rounded-lg">
        <Text className="text-center">
          Hello there <Text className="font-bold">{name?.trim()}</Text>!
        </Text>
        <Button
          label="Close"
          style="mt-5"
          onPress={() => setIsGreetingVisible(false)}
          colors={{
            icon: "white",
            loader: "blue",
            text: "text-white",
            button: "bg-slate-600",
          }}
        />
      </View>
    </View>
  );
};

export default connect((state) => ({ name: state?.app?.name }))(GreetModal);
