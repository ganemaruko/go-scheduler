import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { Header } from "src/components/organisms/header/header";
import { OrderList } from "src/components/organisms/order_list/order_list";
import { PRODUCT_DISPLAY_NAME, PRODUCT_PRICE } from "src/core/product";
import { useRootSelector } from "src/store/root_store";

export type TabTemplateProps = {
  children?: ReactNode;
};

/**
 * Order page template for each tab
 * This template appends order list to right side or bottom side.
 */
export const PageTemplate = (props: TabTemplateProps) => {
  return (
    <>
      <Header />
      <Grid container spacing={0}>
        <Grid xl={10} lg={10} sm={12} md={12} xs={12}>
          {props.children}
        </Grid>
      </Grid>
    </>
  );
};
