import { useParams } from "react-router-dom";
// import RelatedProduct from "../../components/RelatedProduct/RelatedProduct";
// import { useCartIsOpen } from "../../hooks/useCartIsOpen";
import { useDataContext } from "../hooks/useDataContext";
import SpinnerLoading from "../components/Spinner/SpinnerLoading";

export default function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading } = useDataContext();
  console.log(data)

  if (isLoading) {
    return <SpinnerLoading />
  }

  const camera = data?.find(
    (product) => {
      return product.id === +id}
  );

  return <div>Product Details {camera?.title} </div>;
}