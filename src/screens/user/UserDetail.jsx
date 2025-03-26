import {View, Text} from 'react-native';
import React from 'react';

const UserDetail = ({route}) => {
  const {user} = route.params;

  return (
    <View style={{padding: 20}}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      <Text>Website: {user.website}</Text>
      <Text>Company: {user.company.name}</Text>
      <Text>
        Address: {user.address.street}, {user.address.city}
      </Text>
    </View>
  );
};

export default UserDetail;
