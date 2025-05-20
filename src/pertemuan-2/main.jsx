import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import Artikel from "./Artikel";
import QnA from "./QnA";
import Container from "./Container";
import './custom.css';
import ContainerArtikel from "./ContainerArtikel";
import ContainerQnA from "./ContainerQnA";

createRoot(document.getElementById("root"))
    .render (
        <div>
            <ContainerArtikel>
            <Artikel/>
            </ContainerArtikel>

            <ContainerQnA>
            <QnA/>
            </ContainerQnA>
        </div>
    )
    