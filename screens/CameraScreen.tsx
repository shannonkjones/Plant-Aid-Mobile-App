import React, { useState, useEffect } from 'react';
import { Button, Image, Platform } from 'react-native';
import { Text, View } from '../components/Themed';

import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample() {
  const imagePickerOptions = {
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false, // Editing appears to destroy EXIF data
    quality: 1, // Best
    exif: true, // According to docs, iOS will not include location data in EXIF, but Android does (may require enabling location in the camera app)
  }
  const [image, setImage] = useState<ImagePicker.ImageInfo>();
  const [location, setLocation] = useState<string>();

  const getLocation = (image: ImagePicker.ImageInfo) => {
    let location = "Unknown";
    if (image.exif && image.exif.GPSProcessingMethod) {
      const lat = Math.abs(image.exif.GPSLatitude).toFixed(3);
      const long = Math.abs(image.exif.GPSLongitude).toFixed(3);
      location = `${lat}${image.exif.GPSLatitudeRef}, ${long}${image.exif.GPSLongitudeRef}`;
    }
    return location;
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync(imagePickerOptions);

    console.log(result);

    if (!result.cancelled) {
      setImage(result);
      setLocation(getLocation(result));
    }
  };

  const takeImage = async () => {
    let cameraPermissions = await ImagePicker.getCameraPermissionsAsync();
    console.log(cameraPermissions);
    if (!cameraPermissions.granted) {
      cameraPermissions = await ImagePicker.requestCameraPermissionsAsync();
    }

    if (cameraPermissions.granted) {
      const result = await ImagePicker.launchCameraAsync(imagePickerOptions);

      console.log(result);

      if (!result.cancelled) {
        setImage(result);
        setLocation(getLocation(result));
      }
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="Take a new picture" onPress={takeImage} />
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
      {image && <Text>{location}</Text>}
    </View>
  );
}
