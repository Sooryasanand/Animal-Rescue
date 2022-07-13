import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../firebase";

export default function AccountScreen() {
  const [user, setUser] = useState("");
  const navigation = useNavigation();

  var docRef = db.collection("users").doc(`${auth.currentUser?.uid}`);

  const getUser = docRef.get().then((doc) => {
    setUser(doc.data());
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Update")}
        style={styles.field}
      >
        <Text style={styles.fieldText}>Name</Text>
        <Text style={styles.fieldTextAddress}>{user.username}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Update")}
        style={styles.field}
      >
        <Text style={styles.fieldText}>Email</Text>
        <Text style={styles.fieldTextAddress}>{auth.currentUser?.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Update")}
        style={styles.field}
      >
        <Text style={styles.fieldText}>Phone Number</Text>
        <Text style={styles.fieldTextAddress}>{user.phoneNumber}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Update")}
        style={styles.field}
      >
        <Text style={styles.fieldText}>Address</Text>
        <Text style={styles.fieldTextAddress}>{user.address}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    marginTop: 5,
  },

  fieldText: {
    marginVertical: 10,
    fontSize: 16,
  },

  fieldTextAddress: {
    marginTop: 5,
    fontSize: 16,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "#0782F9",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },

  buttonOutlineText: {
    color: "#0782F9",
    fontSize: 16,
    fontWeight: "700",
  },
});
