//  GLOBAL PAGES
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Load } from "./pages/Load";
import { Start } from "./pages/Start";


// USER PAGES
import NavBar from "./components/NavBar";
import { Home } from "./pages/User/Home";
import { HistoriaDetail } from "./pages/User/HistoriaDetail";
import { Historias } from "./pages/User/Historias";
import { MyAccount } from "./pages/User/MyAccount";


//  ADMIN PAGES
import { HomeADM } from "./pages/Admin/HomeADM";
import { ViewHistoria } from "./pages/Admin/ViewHistoria"
import { ViewNiveis } from './pages/Admin/ViewNiveis'
import { CreateHistorias } from "./pages/Admin/CreateHistorias"
import { CreateNivel } from "./pages/Admin/CreateNivel";
import { CreateAtividades } from "./pages/Admin/CreateAtividade";


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="CreateAtividade" component={CreateAtividades} />
      <Stack.Screen options={{ headerShown: false }} name="CreateNivel" component={CreateNivel} />

      <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />

      

      <Stack.Screen options={{ headerShown: false }} name="ViewNiveis" component={ViewNiveis} />



      <Stack.Screen options={{ headerShown: false }} name="CreateHistoria" component={CreateHistorias} />



      <Stack.Screen options={{ headerShown: false }} name="Load" component={Load} />

        <Stack.Screen options={{ headerShown: false }} name="HomeADM" component={HomeADM} />
        <Stack.Screen options={{ headerShown: false }} name="ViewHistoria" component={ViewHistoria} />
        <Stack.Screen options={{ headerShown: false }} name="HistoriaDetail" component={HistoriaDetail} />

        
        <Stack.Screen options={{ headerShown: false }} name="Start" component={Start} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="Historias" component={Historias} />
        <Stack.Screen options={{ headerShown: false }} name="Account" component={MyAccount} />
        <Stack.Screen options={{ headerShown: false }} name="Nav" component={NavBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}