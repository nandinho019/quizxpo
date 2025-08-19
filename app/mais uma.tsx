import { router, useLocalSearchParams } from "expo-router";
import { Text, View, Button } from "react-native";

export default function Index() {
  const { nome } = useLocalSearchParams();
  function voltar (){
    router.back();
  }
  function voltarinicio (){
    router.navigate('/');
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá {nome}</Text>
      <Button
        title = "Voltar"
        color = "rgba(51, 116, 136, 1)"
        onPress = {voltar}
      />
      <Button
        title = "Voltar ao início"
        color = "#F9c"
        onPress = {voltarinicio}
      />
    </View>
  );
}