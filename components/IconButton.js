import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons'

function IconButton({onButtonPressed, icon, color}) {
 return(
  <Pressable style={({pressed}) => pressed && styles.pressed} onPress={onButtonPressed}>
    <Ionicons name={icon} size={24} color={color} />
  </Pressable>
 );
};

export default IconButton;


const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  }
});