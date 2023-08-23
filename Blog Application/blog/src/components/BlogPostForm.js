import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function BlogPostForm({ btnTitle, onSubmit, initialValues }) {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.labelStyle}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        style={styles.buttonStyle}
        title = {`${btnTitle} Blog Post`}
        onPress={() => {onSubmit(title, content)}}
      />
    </View>
  );
}

BlogPostForm.defaultProps = {
    initialValues : {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 15,
        paddingHorizontal: 8,
        paddingVertical: 5,
      },
      labelStyle: {
        fontSize: 20,
        marginBottom: 5,
      },
      containerStyle: {
        padding: 15,
      },
      buttonStyle: {
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
      },
});
