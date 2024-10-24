// Dette kode er stort set 1:1 til øvelsesopgaven, da vores fokus ikke har være på kamerafunktionen i dene iteration.
import { useState, useRef } from "react";
import { Camera, CameraType } from "expo-camera/legacy";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../styles/GlobalStyles";
import CameraStyles from "../styles/CameraStyles";
import { getDatabase, ref, get } from "firebase/database";
import GreenerGoodsComponent from "../components/GreenerGoods";

export default function CameraFeature({ navigation }) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [loading, setLoading] = useState(false);
  const cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);
  const [imagesArr, setImagesArr] = useState([]);
  const [gallery, setGallery] = useState(false);

  // Ask for permission to use the camera
  if (!permission) {
    return <View></View>;
  }
  if (!permission.granted) {
    return (
      <View style={GlobalStyles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button title="Request permission" onPress={requestPermission} />
      </View>
    );
  }

  // Takes a picture
  const snap = async () => {
    if (!cameraRef.current) {
      console.log("No camera ref");
      return;
    }
    setLoading(true);
    const result = await cameraRef.current.takePictureAsync();
    setImagesArr([...imagesArr, result]);
    setLoading(false);
  };

  // Change between front and back camera
  function toggleCameraType() {
    setType((currentType) =>
      currentType === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const CameraGallery = () => {
    return (
      <View style={CameraStyles.gallery}>
        <Text style={GlobalStyles.textAlign}>
          Billeder taget: {imagesArr.length}
        </Text>
        <ScrollView horizontal={true}>
          {imagesArr.length > 0 ? (
            imagesArr.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={{ paddingHorizontal: 10 }}
                onPress={() =>
                  navigation.navigate("image", { image: image.uri })
                }
              >
                <Image
                  source={{ uri: image.uri }}
                  style={{ width: 80, height: 80, borderRadius: 10 }}
                />
              </TouchableOpacity>
            ))
          ) : (
            <Text style={{ color: "white" }}> No images taken </Text>
          )}
        </ScrollView>
      </View>
    );
  };

  // Switch between camera and gallery
  function toggleGallery() {
    setGallery((current) => !current);
  }

  return (
    <SafeAreaView style={[CameraStyles.cameraBackground, GlobalStyles.container]}>
         <GreenerGoodsComponent />
      <Text style={GlobalStyles.underTitle}>Scan dit produkt her</Text>
      <View style={CameraStyles.cameraContainer}>
        <Camera style={CameraStyles.camera} type={type} ref={cameraRef}>
          <View style={CameraStyles.buttonContainer}>
            <View style={{ flex: 1, alignSelf: "flex-end" }}>
              <TouchableOpacity
                style={[CameraStyles.camerabtn, CameraStyles.flipbtn]}
                onPress={toggleCameraType}
              >
                <Ionicons
                  name="camera-reverse-outline"
                  size={32}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignSelf: "flex-end" }}>
              <TouchableOpacity
                style={[CameraStyles.camerabtn, CameraStyles.snapbtn]}
                onPress={snap}
              >
                <Text style={GlobalStyles.smallText}>
                  {loading ? "Loading" : ""}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignSelf: "flex-end" }}>
              <TouchableOpacity
                style={[CameraStyles.camerabtn, CameraStyles.gallerybtn]}
                onPress={toggleGallery}
              >
                <Ionicons name="copy-outline" size={32} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </Camera>
        {gallery ? <CameraGallery /> : null}
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
