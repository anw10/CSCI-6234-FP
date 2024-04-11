import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Card from '../share/card';
import {Button} from 'react-native-paper';
import TakePicture from './TakePicture';

export default function ItemDetail({route, navigation}) {
  const items = route.params;
  console.log(items);

  const handleCapture = useCallback(async () => {
    try {
      if (camera && camera.current && isCameraInitialized) {
        const photo = await camera.current.takePhoto({
          enableAutoStabilization: true,
          skipMetadata: true,
        });
        if (user) {
          const createRef = 'userImages/' + user.uid + '/' + uuid.v4() + '.jpg';
          const reference = storage().ref(createRef);
          const task = reference.putFile(photo.path);
          task.then(() => {
            firestore()
              .collection('Expenses')
              .add({userID: user.uid, receiptPicture: createRef})
              .then(() => {
                setVisible(true);
              });
          });
        }
      }
    } catch (error) {
      console.log({error});
    }
  }, [camera, isCameraInitialized]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{items.title}</Text>
      <Text style={styles.container}>{items.body}</Text>
      <View>
        <Image style={styles.tinyLogo} source={items.imageLink} />
      </View>
      <View>
        <Button
          mode="contained"
          onPress={() => navigation.navigate(TakePicture)}
          style={styles.button}
          textColor="black">
          Take Picture
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    fontSize: 15,
    padding: 24,
  },
  button: {
    margin: 10,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tinyLogo: {
    paddingTop: 26,
    width: 350,
    height: 350,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
