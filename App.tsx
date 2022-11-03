import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import colors from "./src/theme/colors";
import fonts from "./src/theme/fonts";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primary, fontSize: fonts.size.lg }}>
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
