import React, { useEffect, useState } from "react";
import Table from "./Table";

const Clothes = () => {
  const [products, setProducts] = useState([]);
  const columns = React.useMemo(
    () => [
      {
        Header: "Product Image",
        Cell: ({ row }) => {
          return (
            <img
              class="img-fluid img-rounded"
              width={200}
              src={row.original.image}
              alt="photos"
            />
          );
        },
      },
      {
        Header: "Product Title",
        accessor: "title", // accessor is the "key" in the data
      },
      {
        Header: "Product Price",
        accessor: "price",
      },
      {
        Header: "Product Description",
        accessor: "description",
      },
    ],
    []
  );
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div>
      {" "}
      <Table columns={columns} data={products} />
    </div>
  );
};

export default Clothes;
