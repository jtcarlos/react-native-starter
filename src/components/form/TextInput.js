import classNames from "classnames";
import { ErrorMessage } from "formik";
import { TextInput, View, Text } from "react-native";

const FormTextInput = ({ name, placeholder, label, ...props }) => {
  const { handleChange, handleBlur, values, errors } = props;
  const fieldsWithError = Object.keys(errors);

  return (
    <View>
      <Text
        className={classNames("mb-1", {
          "text-danger": fieldsWithError?.includes("name"),
        })}
      >
        {label}
      </Text>
      <TextInput
        value={values[name]}
        placeholder={placeholder}
        cursorColor="#044389"
        placeholderTextColor="#C1C1C1"
        onBlur={handleBlur(name)}
        onChangeText={handleChange(name)}
        className={classNames(
          "w-full px-4 py-2 rounded-lg border border-[#C1C1C1]",
          {
            "border-danger": fieldsWithError?.includes("name"),
          }
        )}
      />
      {fieldsWithError?.includes("name") && (
        <Text className="text-danger text-xs mt-1">
          <ErrorMessage name={name} />
        </Text>
      )}
    </View>
  );
};

export default FormTextInput;
