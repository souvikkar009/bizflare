"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      1: "#042D60", // dark blue color
      2: "#181818", // gray text color
      3: "#0076D3", // sky color
      bg1: "#ffffff", // white color
      bg2: "#ecf4fc", // white blue
      bg3: "#F1F8FE",
      bg4: "#f5f5f5",
      bg5: "#EEEEEE",
    },
  },
});

export default function ChakraUIProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
