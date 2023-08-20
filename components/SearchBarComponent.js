import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import TextFieldComponent from "./TextFieldComponent";

const SearchBarComponent = ({
  data,
  label,
  placeholder,
  style,
  editable,
  getPlanet,
}) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (text) => {
    const newData = data.filter((item) =>
      item.text.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(newData);
    setSearchText(text);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleData = () => {
    if (filteredData[0] != null) {
      const planet = filteredData[0].text;
      setSearchText(planet);
      getPlanet(planet);
    } else {
      setSearchText("");
      alert("Enter a Valid Planet");
    }
  };

  return (
    <View style={style}>
      <TextFieldComponent
        displayLabel="true"
        label={label}
        onChange={(newText) => handleSearch(newText)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={searchText}
        placeholder={placeholder}
        editable={editable}
        onKeyPress={handleData}
      />
      {isFocused && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 5 }}>
              <Text>{item.text}</Text>
            </View>
          )}
          style={styles.searchList}
        />
      )}
    </View>
  );
};

export default SearchBarComponent;

const styles = StyleSheet.create({
  searchList: {
    position: "absolute",
    width: "100%",
    maxHeight: 60,
    top: 60,
    backgroundColor: "rgba(240,237,255,1)",
    padding: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 3,
  },
});
