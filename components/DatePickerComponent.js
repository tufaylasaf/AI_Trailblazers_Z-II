import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState } from "react";
import DatePicker from "react-native-date-picker";

const DatePickerComponent = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={props.date}
        onConfirm={(date) => {
          setOpen(false);
          props.setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({});
