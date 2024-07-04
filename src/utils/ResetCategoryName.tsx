import { useSelectedCategory } from "../stores/useSelectedCategory";

export function useResetCategories() {
  const { onSelectedCategory, selectedCategory } = useSelectedCategory();

  function resetCategoryData() {
    onSelectedCategory({
      name: "React",
      icon: require("../assets/react.png"),
    });
  }

  return resetCategoryData;
}
