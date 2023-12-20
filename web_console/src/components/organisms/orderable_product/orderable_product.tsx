import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
    Product,
    ProductProps,
} from "src/components/molecules/product/product";
import { ProductId } from "src/core/product";
import { upsertOrder } from "src/store/slices/order_slice";

type freelyDecidedProductProps = Omit<ProductProps, "onClickImage">;

export type OrderableProductProps = {
  productProps: freelyDecidedProductProps;
  orderId: ProductId;
};

/**
 * Component to display product image and operate order by redux.
 */
export const OrderableProduct = (props: OrderableProductProps) => {
  const dispatch = useDispatch();
  const onOrder = useCallback(() => {
    dispatch(upsertOrder({ orderId: props.orderId, quantity: 1 }));
  }, [dispatch]);
  return <Product {...props.productProps} onClickImage={onOrder} />;
};
