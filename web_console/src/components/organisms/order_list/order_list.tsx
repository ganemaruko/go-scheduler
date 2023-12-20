import { Button } from "@mui/material";
import { OrderLabel } from "src/components/atoms/order/order";
import { Order } from "src/core/order";

export type OrderListProps = {
  orderList: Order[];
};

/**
 * 注文を確認するためのコンポーネント
 * @param props
 * @returns
 */
export const OrderList = (props: OrderListProps) => {
  return (
    <div>
      {props.orderList.map((order) => {
        return <OrderLabel order={order}></OrderLabel>;
      })}

      <Button variant="contained">注文する</Button>
    </div>
  );
};
