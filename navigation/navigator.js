import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegisterScreen } from "../screens/RegisterScreen";
import { PeopleScreen } from "../screens/PeopleScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Register screen" }}
      />
      <Stack.Screen
        name="People"
        component={PeopleScreen}
        options={{ title: "People screen" }}
      />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

             if (route.name === "Register") {
              iconName = focused ? "log-in" : "log-in-outline";
            } else if (route.name === "People") {
              iconName = focused ? "book" : "book-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#EB6E39",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitle: "Register",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "#EB6E39",
            },
            headerStyle: {
              borderBottomColor: "gray",
              borderBottomWidth: 0.2,
              shadowColor: "transparent",
            },
            title: "Register",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
        <Tab.Screen
          name="People"
          component={PeopleScreen}
          options={{
            headerTitle: "People",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 25,
              paddingBottom: 5,
              color: "#EB6E39",
            },
            headerStyle: {
              borderBottomColor: "gray",
              borderBottomWidth: 0.2,
              shadowColor: "transparent",
            },
            title: "People",
            tabBarStyle: {
              paddingTop: 5,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}