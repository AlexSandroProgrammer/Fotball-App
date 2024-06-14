import React from "react";
import { StyleSheet } from "react-native";

import { ExternalLink } from "./ExternalLink";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";

import Colors from "@/constants/Colors";
import Card from "./Card";

export default function BodyCard({ path }: { path: string }) {
  return (
    <View style={styles.container}>
      <Card
        title="Real Madrid Campeon de La Champions"
        description="Los merengues son nuevamente campeones de europa, ya es la champions numero 16 para la Casa Blanca"
        imageUrl="../assets/images/realmadrid.jpg"
      />
      <Card
        title="Colombia golea a Estados Unidos"
        description="Colombia con 5 golazos demostro su gran nivel en el amistoso que tuvo con Estados Unidos"
        imageUrl="../assets/images/colombia.jpg"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
