import { useLayoutEffect } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealTitem from "../components/MealsList/MealItem";
import MealList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

return(
<MealList items={displayedMeals} />
);
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({

});
