import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Load } from "./pages/Load";
import { Start } from "./pages/Start";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />

        <Stack.Screen options={{ headerShown: false }} name="Load" component={Load} />
        <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        


      </Stack.Navigator>
    </NavigationContainer>
  );
}