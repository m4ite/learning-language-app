import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Register } from "./pages/Register";

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      </NavigationContainer>  
  );
}