import { createTheme, MantineColorsTuple } from "@mantine/core";

const darkMintGreenSchema: MantineColorsTuple = [
  "#f4f5f6",
  "#e8e8e8",
  "#cecece",
  "#b3b3b3",
  "#9a9d9e",
  "#8a8f91",
  "#80888b",
  "#6d7578",
  "#5f686c",
  "#445055",
];

export const theme = createTheme({
  /** Put your mantine theme override here */
  primaryColor: "darkMintGreen",
  cursorType: "pointer",
  colors: {
    darkMintGreen: darkMintGreenSchema,
  },
});
