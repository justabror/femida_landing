import { Box, BoxProps } from "@mantine/core";

import s from "./styles.module.scss";

export const AwesomeVector = ({
  w = "80px",
  h = "60px",
  bg = "#445055",
  pos = "absolute",
  ...rest
}: BoxProps) => {
  return (
    <Box
      className={s.awesomeVector}
      w={w}
      h={h}
      bg={bg}
      pos={pos}
      {...rest}
    />
  );
};
