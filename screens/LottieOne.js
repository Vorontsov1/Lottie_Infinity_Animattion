import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { View, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat } from 'react-native-reanimated';

const LottieOne = () => {
  const animatedValue = useSharedValue(1);
  const windowWidth = Dimensions.get('window').width;

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: animatedValue.value }],
    };
  });

  useEffect(() => {
    animatedValue.value = withRepeat(withTiming(1, { duration: 2000 }), -1, true);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={animatedStyles}>
        <LottieView
          source={require('../assets/lottie/carousel.json')}
          autoPlay
          loop
          style={{
            width: windowWidth,
            height: windowWidth,
          }}
        />
      </Animated.View>

      <View style={{ alignItems: "center", marginTop: 12 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "#4863e1",
            alignSelf: "center",
            marginTop: 12,
          }}
        >
          Create an account
        </Text>

        <View
          style={{
            borderWidth: 0.5,
            borderColor: "#4863e1",
            borderRadius: 10,
            padding: 14,
            marginTop: 12,
          }}
        >
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor={"#4863e1"}
            style={{ fontSize: 16, width: 300, color: "#4863e1" }}
          ></TextInput>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#4863e1",
            padding: 11,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 12,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "500",
              color: "#FFF",
              padding: 5,
              paddingHorizontal: 120,
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LottieOne;
