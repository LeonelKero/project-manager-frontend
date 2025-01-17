import ProductTable from "./components/ProductTable.tsx";
import {Container, CssBaseline} from "@mui/material";
import AAppBar from "./components/AAppBar.tsx";

function App() {

    return (
        <Container maxWidth={"xl"}>
            <CssBaseline/>
            <AAppBar />
            <ProductTable/>
        </Container>
    )
}

export default App
