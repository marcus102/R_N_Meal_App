import { useLayoutEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
//import { FavoriteContext } from "../store/context/favorite_context";
import { addFavorite, removeFavorite } from "../store/redux/favorite";


function MealMoreDetails({ route, navigation }) {

  //const favoriteMealsContext = useContext(FavoriteContext);
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  //const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);


  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      //favoriteMealsContext.removeFavorite(mealId);
      dispatch(removeFavorite({id: mealId}));
    }else{
      //favoriteMealsContext.addFavorite(mealId);
      dispatch(addFavorite({id: mealId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star': 'star-outline'}
            color="white"
            onButtonPressed={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <View style={styles.rootContainer}>
      <ScrollView style={styles.ScrollContainer}>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>

        <MealDetails
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle> Ingredients </Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle> Steps </Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default MealMoreDetails;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  ScrollContainer: {
    flex: 1,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
    height: "100%",
  },
});
