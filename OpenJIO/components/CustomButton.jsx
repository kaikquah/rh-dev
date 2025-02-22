import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustomButton = ({
  text,
  handlePress,
  containerStyle,
  textStyle,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`justify-center items-center bg-blue-600 ${containerStyle}`}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text className={`text-white ${textStyle}`}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
