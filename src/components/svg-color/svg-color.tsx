import { forwardRef, Ref } from "react";
import Box from "@mui/material/Box";
import { svgColorClasses } from "./classes";
import { SxProps } from "@mui/material/styles";
import { BoxProps } from "@mui/material/Box";

// ----------------------------------------------------------------------

interface SvgColorProps extends BoxProps {
  src: string;
  className?: string;
  sx?: SxProps;
}

export const SvgColor = forwardRef(function SvgColor(
  { src, className, sx, ...other }: SvgColorProps,
  ref: Ref<HTMLSpanElement>
) {
  return (
    <Box
      ref={ref}
      component="span"
      className={svgColorClasses.root.concat(className ? ` ${className}` : "")}
      sx={{
        width: 24,
        height: 24,
        flexShrink: 0,
        display: "inline-flex",
        bgcolor: "currentColor",
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  );
});
