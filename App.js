import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "@redux/store";
import { screens } from "@core/screens";
import { settings } from "@core/settings";

const Stack = createStackNavigator();

const App = () => {
  const { navigatorOptions } = settings;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator {...navigatorOptions}>
          {screens?.map((screen) => (
            <Stack.Screen key={screen?.name} {...screen} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
