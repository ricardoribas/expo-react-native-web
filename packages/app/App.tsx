import React, { useState, useCallback } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { ActionSheet } from "react-native-ui-lib";

export default function App() {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const pickOption = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        title="Click Here"
        onPress={() => {
          setShowActionSheet(true);
        }}
      />

      {showActionSheet && (
        <ActionSheet
          title="Action Sheet Example"
          message="Pick an option"
          cancelButtonIndex={3}
          destructiveButtonIndex={0}
          useNativeIOS={false}
          options={[
            { label: "option 1", onPress: pickOption },
            { label: "option 2", onPress: pickOption },
            { label: "option 3", onPress: pickOption },
            { label: "cancel", onPress: pickOption },
          ]}
          visible={showActionSheet}
          onDismiss={() => setShowActionSheet(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
