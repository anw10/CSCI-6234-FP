import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Card from '../share/card';
import {Card} from 'react-native-paper';

export default function Browse({navigation}) {
  const [reviews, setReviews] = useState([
    {
      title: 'Witcher Armor-1',
      rating: 1,
      body: 'Shirt 1',
      key: '1',
      imageLink: require('../assets/fonts/1.png'),
    },
    {
      title: 'Witcher Armor-2',
      rating: 2,
      body: 'Shirt 2',
      key: '2',
      imageLink: require('../assets/fonts/2.png'),
    },
    {
      title: 'Witcher Armor-3',
      rating: 3,
      body: 'shirt 3',
      key: '3',
      imageLink: require('../assets/fonts/3.png'),
    },
  ]);

  return (
    <View>
      <ScrollView style={styles.container}>
        {reviews.map(item => (
          <Card
            style={{margin: 15}}
            key={item.key}
            onPress={() => navigation.navigate('ItemDetail', item)}>
            <Card.Title title={item.title}></Card.Title>
            <Card.Cover source={item.imageLink}></Card.Cover>
            <Card.Content>
              <Text variant="titleLarge">{item.body}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {margin: 13},
});
