import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { BottomSheetUI } from "@/components/bottom-sheet";
import { ButtonStart } from "@/components/buttons/button-start";
import { Title } from "@/components/title";
import { TopSheetUI } from "@/components/top-sheet";
import { colors } from "@/styles/colors";
import Animated from "react-native-reanimated";

const images = [
  require("@/assets/reactn.png"),
  require("@/assets/react.png"),
  require("@/assets/node.png"),
];

const tech = ['React Native', 'React', 'NodeJS'];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View
      className="flex-1"
      style={{
        backgroundColor: colors.violet[800],
      }}
    >
      <TopSheetUI flex={3}>
        <Animated.Image
          source={images[currentImageIndex]}
          className="w-40 h-40"
        />
        <Text className="text-white text-2xl font-semibold mt-4">
          {tech[currentImageIndex]}
        </Text>
      </TopSheetUI>
      <BottomSheetUI flex={2}>
        <View className="gap-4 flex-col mt-4">
          <Title size="lg" title="Bem-vindo ao QuizJS" />
          <Text className="text-slate-900 text-lg text-justify">
            Prepare-se para desafiar suas habilidades em programação com o nosso
            eletrizante quiz de JavaScript✨! Vamos lá, desenvolvedor🧑‍💻
          </Text>
        </View>
        <ButtonStart />
      </BottomSheetUI>
    </View>
  );
}
