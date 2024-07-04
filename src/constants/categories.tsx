
export type CategoryType =  { 
  id?: number,
  name:  "React" | "Node" | "React Native",
  icon: any,
}

export const CATEGORIES: CategoryType[] = [
  {
    id: 1,
    name: "React",
    icon: require("@/assets/react.png"),
  },
  {
    id: 2,
    name: "React Native",
    icon: require("@/assets/reactn.png"),
  },
  {
    id: 3,
    name: "Node",
    icon: require("@/assets/node.png"),
  },
]