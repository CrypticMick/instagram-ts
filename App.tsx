import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";

import { Entypo, AntDesign, Ionicons, Feather } from "@expo/vector-icons";

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
        <Text style={styles.userName}>AmongUsBlue</Text>
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
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={"hearto"}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{ marginLeft: "auto" }}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        <Text style={styles.text}>
          Liked by{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>mortysmith</Text> and{" "}
          <Text style={{ fontWeight: fonts.weight.bold }}>50 others</Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={{ fontWeight: fonts.weight.bold }}>AmongUsBlue</Text> A
          beautiful morning for a hike. It's starting to get chilly out,
          thankfully I brought my Summit 2022 thermos. Kept my coffee blazing
          hot!
        </Text>

        {/* Comments */}
        <Text style={{ color: "grey" }}>View all 15 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={{ fontWeight: fonts.weight.bold }}>mortysmith</Text>{" "}
            Looks gorgeous, just look at it. Gorgeous.
          </Text>
          <AntDesign
            name={"hearto"}
            size={14}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* Time since posted */}
        <Text style={{ color: "grey" }}>1w</Text>
      </View>
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
  footer: {
    padding: 10,
  },
  iconContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    margin: 5,
  },
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentText: {
    flex: 1,
    lineHeight: 18,
  },
  text: {
    lineHeight: 18,
  },
});

export default App;
