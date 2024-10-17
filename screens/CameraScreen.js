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

  // Making a snapshot
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
  // Toggles the camera type

  function toggleCameraType() {
    setType((currentType) =>
      currentType === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const CameraGallery = () => {
    return (
      <View style={GlobalStyles.gallery}>
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

  // Toggles the gallery
  function toggleGallery() {
    setGallery((current) => !current);
  }

  return (
    <SafeAreaView style={[GlobalStyles.cameraBackground, GlobalStyles.container]}>
         <GreenerGoodsComponent />
      <Text style={GlobalStyles.underTitle}>Scan dit produkt her</Text>
      <View style={GlobalStyles.cameraContainer}>
        <Camera style={GlobalStyles.camera} type={type} ref={cameraRef}>
          <View style={GlobalStyles.buttonContainer}>
            <View style={{ flex: 1, alignSelf: "flex-end" }}>
              <TouchableOpacity
                style={[GlobalStyles.camerabtn, GlobalStyles.flipbtn]}
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
                style={[GlobalStyles.camerabtn, GlobalStyles.snapbtn]}
                onPress={snap}
              >
                <Text style={GlobalStyles.smallText}>
                  {loading ? "Loading" : ""}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignSelf: "flex-end" }}>
              <TouchableOpacity
                style={[GlobalStyles.camerabtn, GlobalStyles.gallerybtn]}
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
/*
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Greener Goods</Text>
      <Text style={GlobalStyles.underTitle}>Scan dit produkt her</Text>
      <View style={[GlobalStyles.productContainer, GlobalStyles.box]}>
        <Image
          source={require("../assets/cameraIcon.png")}
          style={{ width: 120, height: 100, alignSelf: "center" }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
  */
