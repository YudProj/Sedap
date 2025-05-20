import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import './tailwind.css';
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import ResponsiveDesign from "./ResponsiveDesign";
import ProductList from "./ProductList";



createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameworkList/> */}
         {/* <FrameworkListSearchFilter/>
            <ResponsiveDesign/> */}
            <ProductList/>

            </div>
    )