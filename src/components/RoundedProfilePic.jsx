import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const RoundedProfilePic = ({ pic = null, picFromFirebase = null, size, borderWidth = 0 }) => {
  
  return (
    <View>
      {(pic || picFromFirebase?.image) ? (
        <Image
          source={{ uri: pic || picFromFirebase?.image }}
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: "red",
            borderWidth
          }}
          resizeMode="cover"
        />
      ) : (
        <Image
          source={require("../../assets/default-pfp.png")}
          style={{ width: size, height: size }}
        />
      )}
    </View>
  );
};

export default RoundedProfilePic;

const styles = StyleSheet.create({});
