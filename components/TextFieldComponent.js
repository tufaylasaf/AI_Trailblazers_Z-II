import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const TextFieldComponent = (props, { style }) => {
  return (
    <View style={style}>
      <Text style={props.displayLabel ? styles.label : { display: "none" }}>
        {props.label}
      </Text>
      <TextInput
        style={
          (props.editable && !props.display) ||
          (!props.editable && props.display)
            ? styles.input
            : styles.inputDisabled
        }
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        inputMode="text"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        readOnly={!props.editable}
        onSubmitEditing={props.onKeyPress}
      />
    </View>
  );
};

export default TextFieldComponent;

const styles = StyleSheet.create({
  container: {
    // width: "fit-content",
    // marginLeft: 10,
    // marginRight: 10,
  },
  label: {
    color: "white",
    width: "fit-content",
    zIndex: -1,
    // fontFamily: "Poppins-Regular",
  },
  input: {
    // position: "absolute",
    height: 40,
    width: "100%",
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
    color: "black",
    fontSize: 12,
    backgroundColor: "rgba(240,237,255,1)",
  },
  inputDisabled: {
    // position: "absolute",
    height: 40,
    width: "100%",
    marginTop: 8,
    padding: 8,
    borderRadius: 8,
    color: "black",
    fontSize: 12,
    backgroundColor: "rgba(240,237,255,0.25)",
  },
});
