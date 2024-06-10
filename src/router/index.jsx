import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Todos from "../pages/todos/todos";
import Main from "../pages/main/main";
import Product from "../pages/product/product";
import Single from "../pages/single-page/single"
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Todos/>}/>
            <Route path="product/*" element={<Product/>}>
            <Route  path="single/:id" element={<Single/>} />
            </Route>
            </Route>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
