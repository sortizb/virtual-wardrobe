import { BrowserRouter, Navigate, Outlet } from "react-router";
import { Routes, Route } from "react-router";
import CollectionDisplay from "../pages/CollectionDisplay";
import EditItem from "../pages/EditItem";

function UserLayout() {
    return <Outlet />
}

function AddLayout() {
    return <Outlet />
}

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Default Redirect */}
                <Route path="/" element={<Navigate to={"/user/closet"} replace/>}/>

                {/* User Routes */}
                <Route path="user" element={<UserLayout />}>
                    <Route index element={<Navigate to={"clothing"} replace />}/>
                    <Route path="closet" element={<CollectionDisplay whatToDisplay="clothing"/>}/>
                    <Route path="outfits" element={<CollectionDisplay whatToDisplay="outfit"/>}/>

                    {/* Add Routes */}
                    <Route path="add" element={<AddLayout />}>
                        <Route index element={<Navigate to={"clothing"} replace/>}/>
                        <Route path="clothing" element={<EditItem item_type="clothing" new_item={true}/>}/>
                        <Route path="outfit" element={<EditItem item_type="outfit" new_item={true}/>}/>
                    </Route>
                </Route>

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/user/closet" replace/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;