import { router, useLocalSearchParams } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const { info } = useLocalSearchParams();
  function voltar (){
    router.back();
  }
  function maisuma (){
  router.push(`/mais uma?info=Última`);
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Esta é a {info}ª página</Text>
      <Button
        title = "Voltar"
        color="#F9c"
        onPress={voltar}
      />
      <Button
        title = "Mais uma"
        color="rgba(51, 116, 136, 1)"
        onPress={maisuma}
      />
    </View>
  );
}