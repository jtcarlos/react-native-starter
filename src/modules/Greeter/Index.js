import { Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Text, View, Modal } from "react-native";

import Screen from "@layout/Screen";
import Button from "@interface/Button";
import TextInput from "@form/TextInput";
import GreetModal from "./components/GreetModal";

import { setName } from "@redux/slices/app";
import { greeterValidationSchema } from "./schema/validationSchema";

const Greeter = () => {
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);

  const dispatch = useDispatch();

  return (
    <Screen>
      <View className="flex-1 mt-[150px] justify-centers">
        <Modal
          transparent={true}
          animationType="fade"
          visible={isGreetingVisible}
        >
          <GreetModal setIsGreetingVisible={setIsGreetingVisible} />
        </Modal>

        <Text className="mb-1 text-xl font-bold">Hi there! </Text>
        <Text className="mb-5">Would you mind telling me your name? </Text>

        <Formik
          initialValues={{ name: "" }}
          validationSchema={greeterValidationSchema}
          onSubmit={(values) => {
            dispatch(setName(values?.name));
            setIsGreetingVisible(true);
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, errors, values }) => {
            let defaultPayload = { handleChange, handleBlur, errors, values };

            return (
              <View className="mb-5">
                <TextInput
                  {...defaultPayload}
                  placeholder="Juan Dela Cruz"
                  label="Full Name"
                  name="name"
                />
                <Button
                  isFullWidth
                  label="Greet Me!"
                  style="mt-5"
                  onPress={handleSubmit}
                  colors={{
                    icon: "white",
                    loader: "blue",
                    text: "text-white",
                    button: "bg-slate-600",
                  }}
                />
              </View>
            );
          }}
        </Formik>
      </View>
    </Screen>
  );
};

export default Greeter;
