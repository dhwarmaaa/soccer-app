import { useState } from "react";
import { printToFileAsync } from "expo-print";
import { shareAsync } from "expo-sharing";
import { View, Button } from "react-native";

const GeneratePDF = () => {
  const html = `
    <html>
      <body>
        <h1>Hi dharma</h1>
        <p style="color: red;">Hello. Bonjour. Hola.</p>
      </body>
    </html>
  `;
  const generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };
  return (
    <View>
      <Button title="Generar PDF" onPress={generatePdf} />
    </View>
  );
};

export { GeneratePDF };
