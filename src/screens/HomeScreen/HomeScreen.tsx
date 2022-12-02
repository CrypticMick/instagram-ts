import { FlatList } from "react-native";
import FeedPost from "../../components/FeedPost";

import posts from "../../assets/data/posts.json";

const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <FeedPost post={item} />} // (data) = {item, index} destructure data.item for {item}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
