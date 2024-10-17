import React from 'react';
import GlobalStyles from "../styles/GlobalStyles";
import ScanStyles from '../styles/ScanStyles';
import GreenerGoodsComponent from "../components/GreenerGoods";

// Import af nødvendige moduler
import { Camera, CameraType } from 'expo-camera/legacy';
import { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, TouchableOpacity, View, ScrollView, Image, SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CameraTest({ navigation }) {
  // Giver adgang til kameraet 
  const [permission, requestPermission] = Camera.useCameraPermissions();
  // UseState til at håndtere loading og kamera   
  const [loading,setLoading] = useState(false);
  // Usestate til at håndtere kameratype  
  const [type, setType] = useState(CameraType.back);
  // Usestate til at håndtere billeder taget med kameraet  
  const [imagesArr, setImagesArr] = useState([]);
    const [gallery, setGallery] = useState(false);
    const cameraRef = useRef(null);

    // Tjekker permission for at få adgang til kameraet
    if (permission === null) {
    return <View />;
    }

    if (!permission.granted) {
    return (
        <View style={styles.container}>
          <Text style={{ textAlign: 'center' }}>"We need your permission to show the camera"</Text>
          <Button onPress={requestPermission} title="grant permission" />
        </View>
      );
    }

    // Skift kameratype (foran/bagpå)
    const toggleCameraType = () => {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    };

    // Funktion som tager billede og gemmer i en liste over billeder
    const snap = async () => {
    if (!cameraRef.current) {
        console.log("No camera ref");
        return;
    }
    setLoading(true);
    const result = await cameraRef.current.takePictureAsync();
    setImagesArr([...imagesArr,result]);
    setLoading(false);
}

const toggleGallery = () => {
    setGallery(current => !current);
}
  
    return (
        <SafeAreaView style={ScanStyles.safeview}>
        <View style={GlobalStyles.container}>
        <GreenerGoodsComponent/>
        <Text style={GlobalStyles.underTitle}>Scan dit produkt her</Text>
          <Camera style={ScanStyles.camera} type={type} ref={cameraRef}>
            <View style={ScanStyles.buttonContainer}>
                <View style={{flex: 1, alignSelf: 'flex-end'}}> 
                    <TouchableOpacity style={ScanStyles.flipbtn} onPress={toggleCameraType}>
                        <Ionicons name = "camera-reverse-outline" size= {32} color = "#fff" />
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, alignSelf: 'flex-end',}}> 
                    <TouchableOpacity style={ScanStyles.snapbtn} onPress={snap}>
                        <Text style={ScanStyles.text}>{loading ? "Loading...":""}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1, alignSelf: 'flex-end',}}> 
                    <TouchableOpacity style={ScanStyles.gallerybtn} onPress={toggleGallery}>
                        <Ionicons name = "copy-outline" size= {32} color = "#fff" />
                    </TouchableOpacity>
                </View>
            </View>
          </Camera>
          { gallery ? (
            <ScrollView horizontal={true}>
            { imagesArr.length > 0 ? (
                imagesArr.map((image,index) => (
                <TouchableOpacity key={index} style={{paddingHorizontal:10}} onPress={() => navigation.navigate('image',{image:image.uri}) } >
                    <Image source={{ uri: image.uri }} style={{ width: 80, height: 80, borderRadius:10 }} />
                </TouchableOpacity>
            ))
            ) : (
            <Text style={{color:"white"}}> No images taken </Text>
             )}
            </ScrollView>
            ) : null}
        </View>
        <StatusBar style="light" />
        </SafeAreaView>
      );
}

