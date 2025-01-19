import { Container, CssBaseline } from "@mui/material";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AAppBar from "./components/AAppBar.tsx";
import AppButton from "./components/AppButton.tsx";
import ProductTable from "./components/ProductTable.tsx";
import useCategoryQuery from "./hooks/useCategoryQuery.ts";

// const queryClient = new QueryClient();

function App() {
  
  const { data } = useCategoryQuery();
  console.log(data);

  return (
    <Container maxWidth={"xl"}>
      <CssBaseline />
      <AAppBar />
      {/* <QueryClientProvider client={queryClient}> */}
      <AppButton label={"Add"} />
      <ProductTable />
      {/* </QueryClientProvider> */}
    </Container>
  );
}

export default App;
