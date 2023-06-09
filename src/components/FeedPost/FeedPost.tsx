import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, Text, View } from "react-native";
import { Entypo, AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../theme/colors";
import fonts from "../../theme/fonts";

import Comment from "../Comment";
import { IPost } from "../../types/models";

interface IFeedPost {
  post: IPost;
}

const FeedPost = ({ post }: IFeedPost) => {
  return (
    <SafeAreaView style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>

      {/* Content */}
      <Image
        source={{
          uri: post.image,
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
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.nofLikes} others
          </Text>
        </Text>

        {/* Post description */}
        <Text style={styles.text}>
          <Text style={{ fontWeight: fonts.weight.bold }}>
            {post.user.username}
          </Text>{" "}
          {post.description}
        </Text>

        {/* Comments */}
        <Text style={{ color: "grey" }}>
          View all {post.nofComments} comments
        </Text>
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* Time since posted */}
        <Text style={{ color: "grey" }}>{post.createdAt}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FeedPost;
