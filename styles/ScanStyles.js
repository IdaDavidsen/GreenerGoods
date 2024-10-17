// green color: #1E6904

import { StyleSheet } from "react-native";

export default StyleSheet.create({
    camera: {
      flex: 1,
      overflow: 'hidden',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      borderRadius: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      backgroundColor: 'transparent',
      margin: 32,
      alignSelf: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: 'semibold',
      color: 'white',
      alignSelf: 'center',
    },
    buttonGallery: {
      fontSize: 15,
      color:"white",
      padding: 10,
      borderRadius:10,
      alignSelf: 'center',
      },
      gallery:{
          flex: 0.2,
          paddingTop:10,
          width:"100%",
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
      },
      safeview:{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          width: '100%',
      },
      snapbtn:{
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          height: 80,
          width: 80,
          borderRadius: 100,
          padding: 10,
          margin: 5,
          alignSelf: 'center',
          borderWidth: 4,
          borderColor: '#dfd3c3',
          justifyContent: 'center',
      },
      flipbtn: {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          borderRadius: 100,
          padding: 5,
          alignSelf: 'baseline',
          justifyContent: 'center',
      },
      gallerybtn: {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
          borderRadius: 100,
          padding: 5,
          alignSelf: 'flex-end',
          justifyContent: 'center',
      },
  });