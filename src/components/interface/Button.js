import classNames from "classnames";
import { TouchableOpacity, Text, View, ActivityIndicator } from "react-native";

import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

const Button = ({ colors, label, onPress, disabled, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={classNames(
        "rounded-lg px-7 py-3",
        props?.style,
        colors?.button,
        {
          "w-full": props?.isFullWidth,
        }
      )}
    >
      <View className={classNames("flex-row justify-center items-center")}>
        {props?.icon?.position === "right" && !props?.isLoading && (
          <FontAwesome5Icon color={colors?.icon} {...props?.icon} />
        )}
        {!!props?.isLoading && <ActivityIndicator color={colors?.loader} />}
        <Text
          className={classNames(
            colors?.text,
            { "ml-3": props?.icon?.position === "right" },
            { "mr-3": props?.icon?.position === "left" }
          )}
        >
          {label}
        </Text>
        {props?.icon?.position === "left" && !props?.isLoading && (
          <FontAwesome5Icon color={colors?.icon} {...props?.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
