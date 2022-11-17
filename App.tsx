import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";

import { Entypo } from "@expo/vector-icons";

const App = () => {
  return (
    <SafeAreaView style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>AmongUs Blue</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        style={styles.image}
      />

      {/* Footer */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  header: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    // moves 3 dots to the right
    marginLeft: "auto",
  },
});

export default App;
