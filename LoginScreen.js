import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import PhoneInput from "react-native-phone-number-input";
import { FontAwesome } from "@expo/vector-icons"; 

const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("BD"); 

  return (
    <View style={styles.container}>
      {/* Hình ảnh thực phẩm */}
      <Image
        source={require("./assets/601 1.png")} 
        style={styles.foodImage}
        resizeMode="contain"
      />

      {/* Text chính */}
      <Text style={styles.mainText1}>Get your groceries</Text>
      <Text style={styles.mainText}>with nectar</Text> 

      {/* Input số điện thoại */}
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode={countryCode}
        onChangeFormattedText={(text) => {
          setPhoneNumber(text);
        }}
        withDarkTheme={false}
        containerStyle={styles.phoneInputContainer}
        textContainerStyle={styles.textInputContainer}
        flagButtonStyle={styles.flagStyle}
        textInputStyle={styles.textInput}

      />

      {/* Dòng phân cách */}
      <Text style={styles.orText}>Or connect with social media</Text>

      {/* Nút đăng nhập Google */}
      <TouchableOpacity style={styles.socialButton} onPress={() => handleGoogleSignIn()}>
      <FontAwesome name="google" size={24} color="white" style={styles.icon} />
      <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      {/* Nút đăng nhập Facebook */}
      <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
        <FontAwesome name="facebook" size={24} color="white" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 0, 
  },
  foodImage: {
    width: 413.37,     
    height: 374.15, 
    marginBottom: 0,
  },
  mainText1: {
    fontFamily:"Giroy",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 2,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  mainText: {
    fontFamily:"Giroy",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  phoneInputContainer: {
    width: "100%",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 20,
  },
  textInputContainer: {
    backgroundColor: "#f1f1f1",
  },
  flagStyle: {
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
  },
  orText: {
    fontFamily:"Giroy",
    fontSize: 14,
    color: "#666",
    marginVertical: 10,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4", 
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 20,
    width: "100%",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10, 
  },
  socialButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  facebookButton: {
    backgroundColor: "#3b5998",
  },
  socialButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default PhoneNumberInput;
