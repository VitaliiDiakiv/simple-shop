import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/apiProducts";

export function useProducts() {
  const {
    isLoading,
    data: products,
    error,
  } = useQuery({ queryKey: ["product"], queryFn: getProducts });

  return { isLoading, products, error };
}
