import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import FeedPost from "./src/components/FeedPost";

const post = {
  id: "1",
  createdAt: "1w",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  description:
    "A beautiful morning for a hike. It's starting to get chilly out, thankfully I brought my Summit 2022 thermos. Kept my coffee blazing hot!",
  user: {
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
    username: "AmongUsBlue",
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: "1",
      comment: "Oh jeez. Georgeus, just look at it. ",
      user: {
        username: "mortysmith",
      },
    },
    {
      id: "2",
      comment: "I want to take Jessica there, drop the location",
      user: {
        username: "mortysmith",
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
