import styled from "styled-components";

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-accent-500);
  }
`;

const CardContainer = styled.div`
  display: flex;
  border: 1px solid var(--color-primary-800);
`;

const ImageContainer = styled.div`
  flex: 0 0 auto;
  width: 250px;
  height: 100%;
  position: relative;
  border-right: 1px solid var(--color-primary-800);
  overflow: hidden;

  .image {
    object-fit: cover; /* Масштабування без спотворення */
    width: 100%;
    height: 100%;
  }
`;

const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const InfoContent = styled.div`
  padding: 20px 28px;
  background-color: var(--color-primary-950);
`;

const Title = styled.h3`
  color: var(--color-accent-500);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 12px;
`;

const ProductDetails = styled.div`
  margin-bottom: 8px;
  color: var(--color-primary-200);

  .detail {
    margin-bottom: 6px;
    font-size: 1.125rem;

    .bold {
      font-weight: bold;
      color: var(--color-accent-500);
    }
  }
`;

const Footer = styled.div`
  background-color: var(--color-primary-950);
  border-top: 1px solid var(--color-primary-800);
  text-align: right;

  .link {
    border-left: 1px solid var(--color-primary-800);
    padding: 16px 24px;
    display: inline-block;
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--color-accent-600);
      color: var(--color-primary-900);
    }
  }
`;

function ProductCard({ product }) {
  const { id, created_at, image, name, count, weight, size } = product;

  return (
    <CardContainer>
      <ImageContainer>
        <img src={image} fill alt={`Product ${name}`} className="image" />
      </ImageContainer>

      <InfoContainer>
        <InfoContent>
          <Title>{name}</Title>

          <ProductDetails>
            <p className="detail">
              <span className="bold">Count:</span> {count}
            </p>
            <p className="detail">
              <span className="bold">Weight:</span> {weight} kg
            </p>
            <p className="detail">
              <span className="bold">Size:</span> {size.width} x {size.height}{" "}
              cm
            </p>
            <p className="detail">
              <span className="bold">Created At:</span>{" "}
              {new Date(created_at).toLocaleString()}
            </p>
          </ProductDetails>
        </InfoContent>

        <Footer>
          <StyledLink href={`/products/${id}`} className="link">
            View Details &rarr;
          </StyledLink>
        </Footer>
      </InfoContainer>
    </CardContainer>
  );
}

export default ProductCard;
