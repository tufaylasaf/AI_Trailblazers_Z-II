import { StyleSheet, View, Text, Pressable } from "react-native";

export function ButtonComponent({ style, onPress, text }) {
  return (
    <Pressable style={style} onPress={onPress}>
      <View style={styles.Background}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  Background: {
    width: "100%",
    height: "100%",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    boxSizing: "border-box",
    backgroundColor:
      " linear-gradient(106.13999999999999deg, rgba(102,0,148,1) 100%, rgba(0,0,0,1) 100%) ",
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    // fontFamily: "Magra-Bold",
    fontWeight: "bold",
    textAlign: "center",
  },
});
