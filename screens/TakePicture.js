import {StyleSheet, View, TouchableOpacity, Button} from 'react-native';

import {Camera, useCameraDevice} from 'react-native-vision-camera';

export default function TakePicture({navigation}) {
  const device = useCameraDevice('back');

  if (device == null) return <NoCameraDeviceError />;

  return (
    <>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <View style={styles.pictureButtonView}>
        <TouchableOpacity
          title="Take Pic"
          style={styles.pictureButton}
          onPress={() => handleCapture()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureButtonView: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    bottom: 0,
    padding: 20,
  },
  pictureButton: {
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'grey',
  },
});
