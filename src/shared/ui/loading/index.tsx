"use client";

import { LoadingOverlay } from "@mantine/core";

// import { useEffect, useState } from "react";

// type Size = { width: number; height: number };
// type Result = { size: Size | null; loading: boolean };

// function useWindowSize(): Result {
//   const [size, setSize] = useState<Size | null>(null);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const update = () =>
//       setSize({ width: window.innerWidth, height: window.innerHeight });

//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, []);

//   return { size, loading: size === null };
// }
export const Loading = () => {
  //   const { loading } = useWindowSize();

  return (
    <LoadingOverlay
      visible={true}
      zIndex={1000}
      bg={"red"}
      overlayProps={{ radius: "sm", blur: 1 }}
      loaderProps={{ color: "pink", type: "bars" }}
    />
  );
};
