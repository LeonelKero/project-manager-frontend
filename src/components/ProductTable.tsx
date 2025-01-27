import {Button, Snackbar} from "@mui/material";
import {DataGrid, GridCellParams, GridColDef, GridDeleteIcon,} from "@mui/x-data-grid";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";
import useProductsQuery from "../hooks/useProductsQuery.ts";
import NewProduct from "./NewProduct.tsx";
import useDeleteProductMut from "../hooks/useDeleteProductMut.ts";

const ProductTable = () => {
    const [isOpen, open] = useState(false);

    const {data, error, isSuccess} = useProductsQuery();

    const queryClient = useQueryClient();

    const {mutate: deleteProduct} = useDeleteProductMut(queryClient)

    const columns: GridColDef[] = [
        {
            field: "id",
            headerName: "ID",
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            width: 60,
        },
        {field: "name", headerName: "Name", width: 200},
        {
            field: "category",
            headerName: "Category",
            width: 200,
            renderCell: (params) => <>{params.row.category.name}</>,
        },
        {field: "price", headerName: "Price", width: 200},
        {field: "description", headerName: "Description", width: 400},
        {
            field: "delete",
            headerName: "",
            width: 150,
            sortable: false,
            filterable: false,
            disableColumnMenu: true,
            renderCell: (params: GridCellParams) => (
                <Button
                    onClick={() => {
                        if (
                            window.confirm(
                                'Are you sure you want to delete product: "'
                                    .concat(params.row.name)
                                    .concat('"?')
                            )
                        ) {
                            deleteProduct(params.row.id);
                        }
                    }}
                    variant="outlined"
                    startIcon={<GridDeleteIcon/>}
                >
                    Delete
                </Button>
            ),
        },
    ];

    if (!isSuccess) {
        return <span>Loading...</span>;
    } else if (error) {
        return <span>Error: Something went wrong!</span>;
    }

    return (
        <>
            <NewProduct/>
            <DataGrid
                columns={columns}
                rows={data}
                disableRowSelectionOnClick
                getRowId={(row) => row.id}
            />
            <Snackbar
                open={isOpen}
                autoHideDuration={2000}
                onClose={() => open(false)}
                message="Product deleted"
            />
        </>
    );
};

export default ProductTable;
