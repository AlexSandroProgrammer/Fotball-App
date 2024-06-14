import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const partidos = [
  {
    id: 1,
    equipo1: {
      nombre: "Real Madrid",
      imagen: require("../assets/images/realmadrid.jpg"),
    },
    equipo2: {
      nombre: "Barcelona",
      imagen: require("../assets/images/barcelona.jpg"),
    },
    resultado: "3 - 1",
  },
  {
    id: 2,
    equipo1: {
      nombre: "Liverpool",
      imagen: require("../assets/images/liverpool.png"),
    },
    equipo2: {
      nombre: "Manchester City",
      imagen: require("../assets/images/city.jpg"),
    },
    resultado: "2 - 2",
  },
  {
    id: 3,
    equipo1: {
      nombre: "O. Marsella",
      imagen: require("../assets/images/marsella.png"),
    },
    equipo2: {
      nombre: "FC Porto",
      imagen: require("../assets/images/porto.png"),
    },
    resultado: "2 - 2",
  },
  {
    id: 4,
    equipo1: {
      nombre: "Arsenal",
      imagen: require("../assets/images/arsenal.png"),
    },
    equipo2: {
      nombre: "Benfica",
      imagen: require("../assets/images/benfica.jpg"),
    },
    resultado: "2 - 4",
  },
  {
    id: 5,
    equipo1: {
      nombre: "PSG",
      imagen: require("../assets/images/psg.png"),
    },
    equipo2: {
      nombre: "Galatasaray",
      imagen: require("../assets/images/galatasaray.jpg"),
    },
    resultado: "2 - 5",
  },
  // Agrega más partidos según sea necesario
];

export default function DetalleResultado() {
  return (
    <View style={styles.container}>
      {partidos.map((partido) => (
        <View key={partido.id} style={styles.card}>
          <View style={styles.teamContainer}>
            <Image source={partido.equipo1.imagen} style={styles.teamImage} />
            <Text style={styles.teamName}>{partido.equipo1.nombre}</Text>
          </View>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>{partido.resultado}</Text>
          </View>
          <View style={styles.teamContainer}>
            <Image source={partido.equipo2.imagen} style={styles.teamImage} />
            <Text style={styles.teamName}>{partido.equipo2.nombre}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "130%",
    marginVertical: 10,
    padding: 10,
  },
  teamContainer: {
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
  },
  teamImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  teamName: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultContainer: {
    flex: 0.5,
    alignItems: "center",
  },
  result: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
