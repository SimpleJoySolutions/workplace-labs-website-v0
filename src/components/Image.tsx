import { CSSProperties } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  layout?: "fill" | "responsive" | "fixed";
  objectFit?: CSSProperties["objectFit"];
}

export const Image = ({
  src,
  alt,
  width,
  height,
  layout,
  objectFit,
  className,
  style,
  ...props
}: ImageProps) => {
  const imageStyle: CSSProperties = {
    ...style,
    ...(layout === "fill" && {
      position: "absolute" as const,
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }),
    ...(layout === "responsive" && {
      width: "100%",
      height: "auto",
    }),
    ...(layout === "fixed" && {
      width,
      height,
    }),
    ...(objectFit && { objectFit }),
  };

  return (
    <img
      src={src}
      alt={alt}
      width={layout === "responsive" ? "100%" : width}
      height={layout === "responsive" ? "auto" : height}
      className={className}
      style={imageStyle}
      loading="lazy"
      {...props}
    />
  );
};
