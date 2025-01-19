import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { addProduct } from "../api/apiClient";

export type ProductRequest = {
  name: string;
  description: string;
  price: number;
  categoryName: string;
};

function NewProduct() {
  const queryClient = useQueryClient();
  const {} = useMutation({
    mutationFn: (request: ProductRequest) => addProduct(request),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (err) => {
      console.error(err);
    },
  });
  const [isOpen, open] = useState(false);
  const [product, setProduct] = useState<ProductRequest>({} as ProductRequest);

  const handleClickOpen = () => {
    open(true);
  };
  const handleClose = () => {
    open(false);
  };
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [evt.target.name]: [evt.target.value] });
  };

  return (
    <>
      <button onClick={handleClickOpen}>New Product</button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>New car</DialogTitle>
        <DialogContent>
          <input
            placeholder="Product Name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
          <br />
          <input
            type="number"
            min="1"
            placeholder="Price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
          <br />
          <input
            placeholder="Category Name"
            name="categoryName"
            value={product.categoryName}
            onChange={handleChange}
          />
          <br />
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleClose}>Save</button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default NewProduct;
