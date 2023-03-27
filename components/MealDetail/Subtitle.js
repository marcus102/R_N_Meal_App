import { StyleSheet, View, Text } from "react-native";

function Subtitle({children}) {
 return(
  <View style={styles.subtitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>
 );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color : '#ee5d097d',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#ee5d097d',
    borderBottomWidth: 2,
  }
});