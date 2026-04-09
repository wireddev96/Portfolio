import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
};

/** Replaces deprecated `react-optimized-images` Picture: bundled assets + native lazy loading. */
function ResponsiveImage({ src, alt, loading = "lazy", decoding = "async", ...rest }: Props) {
  return <img src={src} alt={alt ?? ""} loading={loading} decoding={decoding} {...rest} />;
}

export default ResponsiveImage;
