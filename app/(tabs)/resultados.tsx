import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import DetalleResultado from "../../components/DetalleResultado";

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.sub_container}>
          <Text style={styles.title}>Resultado de Partidos</Text>
          <Text style={styles.description}>
            Te presentamos el resultado de los partidos de esta semana
          </Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <DetalleResultado />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sub_container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    color: "#888",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
