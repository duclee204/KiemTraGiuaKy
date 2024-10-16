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
          <Text style={styles.title}>Welcome</Text>
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
    justifyContent: "flex-end", // Đẩy nội dung xuống cuối
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 80, // Chỉnh để văn bản thấp xuống
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
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#00c853",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    width: "80%", // Làm cho nút dài hơn
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18, // Tăng kích cỡ chữ
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
