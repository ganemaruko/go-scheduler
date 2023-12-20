import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { OrderableProduct } from "src/components/organisms/orderable_product/orderable_product";
import beerImage from "src/images/menu/beer.jpg";

/**
 * naive implementation for product spacing.
 * @param props
 * @returns
 */
const ProductGrid = (props: { children: ReactNode }) => {
  return (
    <Grid item xs={12} sm={6} xl={3}>
      {props.children}
    </Grid>
  );
};

export const DrinkTab = () => {
  return (
    <Grid container spacing={2}>
      <ProductGrid>
        <OrderableProduct
          productProps={{ imageSrc: beerImage, productName: "ビール" }}
          orderId="beer"
        />
      </ProductGrid>
      <ProductGrid>
        <OrderableProduct
          productProps={{ imageSrc: beerImage, productName: "カクテル" }}
          orderId="cocktail"
        />
      </ProductGrid>
      <ProductGrid>
        <OrderableProduct
          productProps={{ imageSrc: beerImage, productName: "ワイン" }}
          orderId="wine"
        />
      </ProductGrid>
    </Grid>
  );
};
