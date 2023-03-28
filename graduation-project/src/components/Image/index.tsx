import NextImage from "next/image";
import type { ImageType } from "../types";

export const Image: ImageType = (props) => <NextImage {...props} />;

export default Image;
