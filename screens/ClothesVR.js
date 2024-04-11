import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroARImageMarker,
  ViroText,
  ViroTrackingReason,
  ViroARTrackingTargets,
  ViroTrackingStateConstants,
  ViroScene,
  ViroImage,
  ViroBox,
  Viro3DObject,
} from '@viro-community/react-viro';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

ViroARTrackingTargets.createTargets({
  targetOne: {
    source: require('../images/me.jpg'),
    orientation: 'Up',
    physicalWidth: 1, // real world width in meters
    type: 'Image',
  },
});

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('onInitialized', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
      console.log(require('../images/me.jpg'));
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroAmbientLight color="#FFFFFF" />
      <ViroText
        text={text}
        scale={[0.9, 0.9, 0.9]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroARImageMarker
        target={'targetOne'}
        onAnchorFound={console.log('FACE FOUND')}>
        <Viro3DObject
          source={require('../images/shirt.jpg')}
          type="OBJ"
          scale={(0.1, 0.1, 0.1)}></Viro3DObject>
      </ViroARImageMarker>
    </ViroARScene>
  );
};

export default function ClothesVR({navigation}) {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
}

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
