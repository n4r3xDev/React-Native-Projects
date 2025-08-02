import { Todo, TodoPriorityColor } from "@/types/TodoTypes";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type TodoItemProps = {
  todo: Todo;
  onCompleteButtonPressed: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
};

export default function TodoItem({
  todo,
  onCompleteButtonPressed,
  onDelete,
}: TodoItemProps) {
  let color: TodoPriorityColor;
  switch (todo.priority) {
    case "Low": {
      color = "lightgreen";
      break;
    }
    case "Normal": {
      color = "green";
      break;
    }
    case "High": {
      color = "red";
      break;
    }
    default: {
      throw Error("Unknown Priority: " + todo.priority);
    }
  }
  return (
    <Pressable
      onLongPress={() => {
        onDelete(todo);
      }}
    >
      <View style={styles.container}>
        <AntDesign name="star" size={24} color={color} />
        <Text style={styles.title}>
          {todo.id}.{todo.title}
        </Text>
        <BouncyCheckbox
          isChecked={todo.completed}
          fillColor="green"
          useBuiltInState={false}
          size={25}
          disableText
          onPress={() => {
            onCompleteButtonPressed(todo);
          }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "aqua",
    flexDirection: "row",
    padding: 16,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 7,
  },
  title: {
    flex: 1,
    marginLeft: 10,
  },
});
