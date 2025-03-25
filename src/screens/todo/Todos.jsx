import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import Input from '../login/components/Input';

const Todos = () => {
    const [todo, setTodo] = useState({});
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const response = await fetch("http://192.168.192.1:5001/cards");
            if (response.ok) {
                const data = await response.json();
                setTodos(data);
            }
        } catch (error) {
            console.error("Error fetching todos:", error);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    const addTodo = async () => {
        try {
            const response = await fetch("http://192.168.192.1:5001/cards", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify(todo)
            });

            if (response.ok) {
                getTodos();
                setTodo({});
            }
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://192.168.192.1:5001/cards/${id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json"
                }
            });
            if (response.ok) {
                getTodos();
            }
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    return (
        <View style={styles.container}> 
            <Text style={styles.header}>Add todo</Text>
            
            <Input
                name="title"
                setFormData={setTodo}
                value={todo.title}
                placeholder="Enter title"
            />
            <Input
                name="description"
                setFormData={setTodo}
                value={todo.description}
                placeholder="Enter description"
            />
            <TouchableOpacity style={styles.button} onPress={addTodo}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
            
            <Text style={styles.subHeader}>Todos</Text>
            <FlatList
                data={todos}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}> 
                        <View>
                            <Text style={styles.todoTitle}>{item.title}</Text>
                            <Text>{item.description}</Text>
                        </View>
                        <TouchableOpacity onPress={() => deleteTodo(item._id)}>
                            <Text style={styles.deleteText}>X</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.emptyText}>No items found</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#3B82F6',
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    subHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginBottom: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    todoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    deleteText: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    emptyText: {
        textAlign: 'center',
        color: 'gray',
    },
});

export default Todos;