import Navbar  from "./molecules/NavBar"
import Title  from "./molecules/Title"
import ProductivityTable from './Table/Productivity/ProductivityTable'

const ProductivityReport = () =>{
    return(
        <>
            <Navbar />
            <Title />
            <ProductivityTable />
        </>
    )
}

export default ProductivityReport;