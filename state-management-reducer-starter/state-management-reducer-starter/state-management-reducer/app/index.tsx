import TodoItem from "@/components/TodoItem";
import { TodoReducer } from "@/reducers/TodoReducer";
import { Todo, todos } from "@/types/TodoTypes";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useReducer, useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

export default function Index() {
  // const [todoList, setTodoList] = useState<Todo[]>(todos);
  const [todoList, dispatch] = useReducer(TodoReducer, todos)
  function addTodo() {
    dispatch({
      type: "add",
      todo: {title: "New Todo", priority: "High", completed: false},
      prevId: todoList.length + 1,
    })
  }
  function changeStatus(todo: Todo) {
    dispatch({
      type: "change",
      todo: {...todo, completed: true},
    })
  }

  function deleteTodo(todo: Todo) {
    dispatch({
      type: "delete",
      todo: todo,
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingBottom: 60 }}
        data={todoList}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            onCompleteButtonPressed={changeStatus}
            onDelete={deleteTodo}
          />
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={addTodo}>
        <Ionicons name="add" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    position: "relative",
  },
  fab: {
    position: "absolute",
    right: 10,
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    elevation: 5,
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
  },
});
