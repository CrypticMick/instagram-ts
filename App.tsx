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
      comment: "Hello there",
      user: {
        username: "vadimnotjustdev",
      },
    },
    {
      id: "2",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. H",
      user: {
        username: "vadimnotjustdev",
      },
    },
  ],
};

const post1 = {
  id: "2",
  createdAt: "2w",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg",
  description: "Can't beat these views!!",
  user: {
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg",
    username: "AmongUsBlue",
  },
  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: "1",
      comment: "Hello there",
      user: {
        username: "vadimnotjustdev",
      },
    },
    {
      id: "2",
      comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit. H",
      user: {
        username: "vadimnotjustdev",
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <FeedPost post={post} />
      <FeedPost post={post1} />
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
