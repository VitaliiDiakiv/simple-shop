import { useProducts } from "../feature/useProduct";
import Spinner from "./Spinner";
import Empty from "./Empty";
import ProductCard from "../feature/ProductCard";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    gap: 3rem;
  }

  @media (min-width: 1280px) {
    gap: 3.5rem;
  }
`;

function ProductList() {
  const { isLoading, products } = useProducts();

  if (isLoading) return <Spinner />;
  if (!products.length) return <Empty resourceName="products" />;

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </Grid>
  );
}

export default ProductList;
