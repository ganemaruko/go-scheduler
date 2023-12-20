import { BaseImage } from "src/components/atoms/image/image";

export type ProductProps = {
  imageSrc: string;
  productName: string;
  onClickImage?: () => void;
};

/**
 * Component to display product image and text.
 */
export const Product = (props: ProductProps) => {
  return (
    <div onClick={props.onClickImage}>
      <div>{props.productName}</div>
      <BaseImage src={props.imageSrc} />
    </div>
  );
};
