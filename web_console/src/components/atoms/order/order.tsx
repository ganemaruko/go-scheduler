import PlusIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import MinusIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Order } from "src/core/order";

export type OrderProps = {
  order: Order;
};
export const OrderLabel = (props: OrderProps) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <MinusIcon />
          <PlusIcon />
        </ListItemIcon>
        <ListItemText
          primary={props.order.name}
          secondary={`${props.order.price} x ${props.order.quantity}`}
        />
      </ListItemButton>
    </ListItem>
  );
};
