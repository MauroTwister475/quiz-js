import { Link } from "expo-router";
import { View, Text } from "react-native";
import { Code2 } from "lucide-react-native";
import { twMerge } from "tailwind-merge";
import { colors } from "@/styles/colors";

interface LogoProps {
  className?: string;
  sizeIcon?: number;
  color?: string;
}

export function Logo({
  className,
  color = colors.white,
  sizeIcon = 70,
}: LogoProps) {
  return (
    <View
      className={twMerge(
        "items-center justify-center flex-row gap-2",
        className
      )}
    >
      <Code2 size={sizeIcon} fontWeight="bold" color={color} />
      <Link href="/">
        <Text
          className={twMerge("font-semibold text-white text-2xl", className)}
        >
          Quiz JS
        </Text>
      </Link>
    </View>
  );
}
