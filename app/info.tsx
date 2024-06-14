import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image } from "react-native";
import { Text, View } from "@/components/Themed";

export default function InfoScreen() {
  return (
    <View style={styles.container}>
      {/* Logo circular */}
      <Image
        source={require("@/assets/images/realmadrid.jpg")} // Asegúrate de tener el logo en la carpeta assets
        style={styles.logo}
      />
      {/* Título de la app */}
      <Text style={styles.title}>Football App</Text>
      {/* Información de la app */}
      <Text style={styles.infoText}>
        La aplicación se enfoca principalmente en mostrar las noticias,
        resultados, y los equipos más influyentes de la actualidad con respecto
        al fútbol.
      </Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  infoText: {
    fontSize: 16,
    textAlign: "left",
    lineHeight: 24,
  },
});
