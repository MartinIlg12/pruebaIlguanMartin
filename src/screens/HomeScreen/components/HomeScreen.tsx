//Martin Ilguan Prueba
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import firebase from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../configs/firebaseConfig';
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../../../theme/styles';
import { Avatar, Button, Divider, IconButton, Modal, Portal, Text, TextInput, FAB } from 'react-native-paper';
import { MessageCardComponent } from './MessageCardComponent';

interface FormUser {
  name: string;
}


interface Product {
  id: string;
  name: string;
  price: number;
}

export const HomeScreen = () => {
  
  const [formUser, setFormUser] = useState<FormUser>({ name: '' });

  
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Mouse', price: 150 },
    { id: '2', name: 'Pc', price: 1500 },
    { id: '3', name: 'Teclado', price: 80 },
    { id: '3', name: 'Monitor', price: 120 },
  ]);

  
  const [userAuth, setUserAuth] = useState<firebase.User | null>(null);

  
  useEffect(() => {
    setUserAuth(auth.currentUser);
    setFormUser({ name: auth.currentUser?.displayName ?? '' });
  }, []);

  
  const [showModalProfile, setShowModalProfile] = useState<boolean>(false);

  
  const [showModalMessage, setShowModalMessage] = useState<boolean>(false);

  
  const handlerSetValues = (key: string, value: string) => {
    setFormUser({ ...formUser, [key]: value });
  };

  
  const handlerUpdateUser = async () => {
    await updateProfile(userAuth!, {
      displayName: formUser.name,
    });
    setShowModalProfile(false);
  };

  
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <>
      <View style={styles.routeHome}>
        <View style={styles.header}>
          <Avatar.Text size={24} label="MI" />
          <View>
            <Text variant="bodySmall">Bienvenido</Text>
            <Text variant="labelLarge">{userAuth?.displayName}</Text>
          </View>
          <View style={styles.iconEnd}>
            <IconButton
              icon="account-edit"
              size={30}
              mode="contained"
              onPress={() => {
                setShowModalProfile(true);
              }}
            />
          </View>
        </View>
        <View>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.textTotal}>Total: ${calculateTotalPrice()}</Text>
          </View>
        </View>
      </View>
      <Portal>
        <Modal visible={showModalProfile} contentContainerStyle={styles.modal}>
          <View style={styles.header}>
            <Text variant="headlineMedium">Mi perfil</Text>
            <View style={styles.iconEnd}>
              <IconButton icon="close-circle-outline" size={30} onPress={() => setShowModalProfile(false)} />
            </View>
          </View>
          <Divider />
          <TextInput
            mode="outlined"
            label="Nombre"
            value={formUser.name}
            onChangeText={(value) => handlerSetValues('name', value)}
          />
          <TextInput
            mode="outlined"
            label="Correo"
            value={userAuth?.email!}
            disabled
          />
          <Button mode="contained" onPress={handlerUpdateUser}>
            Actualizar
          </Button>
        </Modal>
      </Portal>
    </>
  );
};