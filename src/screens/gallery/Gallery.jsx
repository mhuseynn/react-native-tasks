import React, { useState } from "react";
import { View, Button, Image, PermissionsAndroid, Platform } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const requestGalleryPermission = async () => {
    if (Platform.OS === "android") {
      const permission =
        Platform.Version >= 33 
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const granted = await PermissionsAndroid.request(permission, {
        title: "Gallery Permission",
        message: "Allow permission",
        buttonPositive: "OK",
      });

      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
    return true; 
  };

  const openGallery = async () => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) {
      alert("Access denied");
      return;
    }

    launchImageLibrary({ mediaType: "photo" }, (response) => {
      if (!response.didCancel && !response.error && response.assets) {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Choose photo" onPress={openGallery} />
      {selectedImage && (
        <Image
          source={{ uri: selectedImage }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}
    </View>
  );
};

export default Gallery;
