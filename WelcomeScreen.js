import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/8140 1.png")}
        style={styles.image}
      >
        <View style={styles.overlayContainer}>
          <Text style={styles.title1}>Welcome</Text>
          <Text style={styles.title}>to our store</Text>
          <Text style={styles.subtitle}>
            Get your groceries in as fast as one hour
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "flex-end", 
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  title1: {
    fontFamily: 'Gilroy',
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 0,
    textAlign: "center",
  },
  title: {
    fontFamily: 'Gilroy',
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontFamily: "Gilroy-Medium",
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#53B175",
    paddingVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: "90%",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: 'Gilroy',
    color: "#fff",
    fontSize: 18, 
  },
});

export default WelcomeScreen;
