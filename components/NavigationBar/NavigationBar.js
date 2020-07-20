import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { primaryColor } from "../../constant/style-constants";
import Home from "../Home/Home";
import TodoDetails from "../TodoDetails/TodoDetails";

const NavigationBar = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: primaryColor,
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textTransform: "uppercase",
            },
          }}
          component={Home}
        />

        <Screen
          name="TodoDetails"
          options={{
            title: "Todo-details",
            headerStyle: {
              backgroundColor: primaryColor,
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              textTransform: "uppercase",
            },
          }}
          component={TodoDetails}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default NavigationBar;
