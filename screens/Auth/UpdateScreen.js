import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { auth, db } from "../../firebase";
import * as firebase from "firebase";

const SignupScreen = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();
  const userInfo = firebase.auth().currentUser;

  var docRef = db.collection("users").doc(`${auth.currentUser?.uid}`);

  const updateUser = () => {
    if (name !== undefined) {
      docRef.update({
        username: name,
      });
    }

    if (email !== undefined) {
      docRef.update({
        email: email,
      });
      userInfo.updateEmail(email);
    }

    if (number !== undefined) {
      docRef.update({
        phoneNumber: number,
      });
    }

    if (address !== undefined) {
      docRef.update({
        address: address,
      });
    }

    if (password !== undefined) {
      userInfo.updatePassword(password);
    }

    navigation.navigate("HomeStack");
  };

  var docRef = db.collection("users").doc(`${auth.currentUser?.uid}`);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Phone Number"
          keyboardType="numeric"
          value={number}
          onChangeText={(text) => setNumber(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Address"
          keyboardType="numeric"
          value={address}
          onChangeText={(text) => setAddress(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={updateUser}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Update</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainerSecond}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomeStack")}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  buttonContainerSecond: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
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

  loginText: {
    marginTop: 15,
    color: "#0782F9",
    fontSize: 14,
  },
});
