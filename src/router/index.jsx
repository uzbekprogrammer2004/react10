import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Todos from "../pages/todos/todos";
import Main from "../pages/main/main"
import Product from "../pages/product/product"
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Product/>}/>
            <Route path="todos" element={<Todos/>}/>
            </Route>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
