import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountryPicker from 'react-native-country-picker-modal';

const countryCodes = {
  BD: '+880', // Bangladesh
  US: '+1',   // USA
  // Thêm các mã quốc gia và đầu số khác nếu cần
};

const LoginScreen = () => {
  const [countryCode, setCountryCode] = useState('BD'); // Mã quốc gia mặc định
  const [phoneNumber, setPhoneNumber] = useState(''); // Số điện thoại
  const [fullPhoneNumber, setFullPhoneNumber] = useState(countryCodes['BD']); // Số điện thoại đầy đủ với đầu số

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2); // Cập nhật mã quốc gia
    setFullPhoneNumber(countryCodes[country.cca2] || ''); // Cập nhật đầu số tương ứng
    setPhoneNumber(''); // Đặt lại số điện thoại
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("./assets/601 1.png")} // Thay bằng đường dẫn tới hình ảnh phù hợp
        style={styles.image}
      />
      <Text style={styles.title}>Get your groceries with nectar</Text>
      <View style={styles.inputContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFlag={true}
          withFilter={true}
          onSelect={onSelectCountry}
          containerButtonStyle={styles.countryPicker}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Phone number"
          value={phoneNumber}
          onChangeText={setPhoneNumber} // Cập nhật số điện thoại
          keyboardType="phone-pad" // Hiển thị bàn phím số điện thoại
        />
      </View>
      <Text style={styles.orText}>Or connect with social media</Text>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="google" size={20} color="#fff" />
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Icon name="facebook" size={20} color="#fff" />
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 0,
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 5,
    marginBottom: 20,
    width: '100%',
  },
  countryPicker: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 18, // Tăng kích thước chữ
    paddingVertical: 10, // Tăng khoảng cách trong ô nhập
    paddingHorizontal: 10, // Tăng khoảng cách bên trong ô nhập
    width: '60%', // Giảm chiều rộng của ô nhập
  },
  orText: {
    color: '#7a7a7a',
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    backgroundColor: '#4267B2',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  socialButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default LoginScreen;
