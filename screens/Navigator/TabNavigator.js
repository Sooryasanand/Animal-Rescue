import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../HomeScreen";
import AccountScreen from "../AccountScreen";
import { Text, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Account"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
          headerRight: ({ color }) => (
            <TouchableOpacity onPress={handleSignOut}>
              <Ionicons
                name="ios-exit"
                color={color}
                size="25"
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
};

export { MyTabs };
