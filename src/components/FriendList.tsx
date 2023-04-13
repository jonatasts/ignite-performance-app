import React, { useMemo } from "react";
import { View, Text, FlatList } from "react-native";

import { Friend } from "./Friend";

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export function FriendList({ data }: Props) {
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <View>
      <Text style={{ marginBottom: 15 }}>Total de likes: {totalLikes}</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Friend data={item} />}
      />
    </View>
  );
}
