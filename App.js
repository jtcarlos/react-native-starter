import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { screens } from "@core/screens";
import { settings } from "@core/settings";

const Stack = createStackNavigator();

const App = () => {
  const { navigatorOptions } = settings;

  return (
    <NavigationContainer>
      <Stack.Navigator {...navigatorOptions}>
        {screens?.map((screen) => (
          <Stack.Screen key={screen?.name} {...screen} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
