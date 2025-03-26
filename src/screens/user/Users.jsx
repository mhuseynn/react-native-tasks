import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';

const Users = () => {
  const [users, setUsers] = useState([]);

  const navigation=useNavigation();
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={{padding: 15, borderBottomWidth: 1, borderBottomColor: '#ddd'}}
          onPress={() => navigation.navigate('UserDetail', {user: item})}>
          <Text style={{fontSize: 18}}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Users;
