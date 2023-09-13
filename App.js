import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { screens } from "@core/screens";
import { settings } from "@core/settings";

const Stack = createNativeStackNavigator();

const App = () => {
  const { navigatorOptions } = settings;

  return (
    <NavigationContainer>
      <Stack.Navigator {...navigatorOptions}>
        {screens?.map((screen, index) => (
          <Stack.Screen key={screen?.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
