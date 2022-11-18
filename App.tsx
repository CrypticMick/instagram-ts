import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import FeedPost from "./src/components/FeedPost";

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <FeedPost />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
