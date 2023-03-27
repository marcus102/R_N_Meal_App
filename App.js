import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealMoreDetails from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
//import FavoriteContextProvider from "./store/context/favorite_context";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#993d04ff" },
        drawerContentStyle:{backgroundColor: '#5e2c0dff'},
        drawerInactiveTintColor: '#ffffff',
        drawerActiveTintColor: '#ffbf8e',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({color, size}) => <Ionicons name="list"  color={color} size={size} />
        }}
      />
      <Drawer.Screen name="Favorite" component={FavoriteScreen} options={{
        drawerIcon: ({color, size}) => <Ionicons name="star"  color={color} size={size} />
      }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#993d0469" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{
                //title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverviewScreen}
              //options={({route, navigation}) => {
              //   const catId = route.params.categoryId;
              //   return {
              //title: 'About The Meal'
              //   };
              //}}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealMoreDetails}
              // options={{ headerRight: () => {
              //   return (
              //     <Text>In the header</Text>
              //   );
              // } }}
              options={{
                title: "About The Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
