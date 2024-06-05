import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Comments from "../pages/comments/comments"
import Posts from "../pages/posts/posts";
import Main from "../pages/main/main"
import Albums from "../pages/albums/albums"
import Photos from "../pages/photos/photos"
import Users from "../pages/users/users"
import Todos from "../pages/todos/todos"
const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
            <Route index element={<Login/>}/>
            <Route path="main/*" element={<Main/>}>
            <Route index element={<Posts/>}/>
            <Route path="comments" element={<Comments/>}/>
            <Route path="todos" element={<Todos/>}/>
            <Route path="users" element={<Users/>}/>
            <Route path="photos" element={<Photos/>}/>
            <Route path="albums" element={<Albums/>}/>
            </Route>
            </Route>
        )
    );
    return <RouterProvider router={router}/>
};
export default Index;
