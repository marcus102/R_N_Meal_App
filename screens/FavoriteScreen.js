//import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useSelector } from 'react-redux';

import MealList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
//import { FavoriteContext } from "../store/context/favorite_context";

function FavoriteScreen() {
  //const favoriteMealsContexte = useContext(FavoriteContext);
  const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    //favoriteMealsContexte.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return(
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yes</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
