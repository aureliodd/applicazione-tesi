import * as Permissions from 'expo-permissions';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,Image /*ScrollView, TextInput*/, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const Cameras = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [isCameraVisible] = useState(false);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View style={styles.container}>
        <Camera style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => takePicture()}> 
            {/* <Image source={require("./images/camera.png")} style={{width: 100, height: 100}} /> */}
          </TouchableOpacity>
  
  
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={styles.text}> Flip </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    )
  
   /*  return (
      <View style={styles.container}>
        <Text>Benvenuto mbare</Text>
        <StatusBar style="auto" />
      </View>
    ); */
  
  }

  const takePicture = async () => {
    if (this.camera) {
        const options = {
          quality: 1,
          base64: true
        };
        const data = await this.camera.takePictureAsync(options);
        console.log(data);
    }
  };

  export default Cameras

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
})