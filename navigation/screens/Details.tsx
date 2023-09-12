import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigationTypes";
import { RouteProp } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

type DetailsScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

type DetailsScreenProps = {
  navigation: DetailsScreenNavigationProp;
  route: DetailsScreenRouteProp;
};

export function DetailsScreen({ navigation }: DetailsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details ... again"
        onPress={() => navigation.push("Details")}
      />
      <Button
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Pop to top"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
