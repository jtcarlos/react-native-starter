import { Text, View } from "react-native";
import { connect, useDispatch } from "react-redux";

import Button from "@interface/Button";
import Screen from "@layout/Screen";

import { increment, decrement } from "@redux/slices/app";

const Counter = ({ state }) => {
  const dispatch = useDispatch();

  return (
    <Screen>
      <View className="flex-1 items-center justify-center">
        <Text className="mb-5 text-[100px] font-bold">
          {state?.app?.counter}
        </Text>
        <View className="flex flex-row">
          <Button
            label="Increment"
            style="mr-1"
            onPress={() => {
              dispatch(increment());
            }}
            icon={{ position: "right", name: "plus", size: 15 }}
            colors={{
              icon: "white",
              loader: "blue",
              text: "text-white",
              button: "bg-slate-600",
            }}
          />
          <Button
            label="Decrement"
            style="ml-2"
            icon={{ position: "right", name: "minus", size: 15 }}
            onPress={() => {
              dispatch(decrement());
            }}
            colors={{
              icon: "white",
              loader: "blue",
              text: "text-white",
              button: "bg-slate-600",
            }}
          />
        </View>
        <Text className="mt-10 text-gray-400 text-center">
          Note: This page uses Redux for managing state
        </Text>
      </View>
    </Screen>
  );
};

export default connect((state) => ({ state }))(Counter);
