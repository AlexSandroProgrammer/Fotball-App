import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function TeamCard({ team }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={{ uri: team.teamLogo }} style={styles.teamLogo} />
        <Text style={styles.teamName}>{team.name}</Text>
      </View>
      <Text style={styles.teamInfo}>Victorias: {team.wins}</Text>
      <Text style={styles.teamInfo}>Jugadores: {team.playersCount}</Text>
      <Text style={styles.teamInfo}>Jugador más importante:</Text>
      <View style={styles.playerInfo}>
        <Image
          source={{ uri: team.starPlayer.image }}
          style={styles.playerImage}
        />
        <View style={styles.playerDetails}>
          <Text style={styles.playerName}>{team.starPlayer.name}</Text>
          <Text style={styles.playerNumber}>
            Dorsal: {team.starPlayer.number}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  teamInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  playerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  playerDetails: {
    flexDirection: "column",
  },
  playerName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  playerNumber: {
    fontSize: 14,
    color: "#666",
  },
});
