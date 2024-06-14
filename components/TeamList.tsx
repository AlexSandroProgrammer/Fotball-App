import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import TeamCard from "./TeamCard"; // Asegúrate de ajustar la ruta si es necesario

export default function TeamList({ teams = [] }) {
  return (
    <View style={styles.container}>
      {teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    width: "90%",
    margin: 10,
  },
});
