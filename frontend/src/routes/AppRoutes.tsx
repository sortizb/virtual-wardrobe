import { BrowserRouter, Navigate } from "react-router";
import { Routes, Route } from "react-router";
import CollectionDisplay from "../pages/CollectionDisplay";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="user">
                    <Route path="closet" element={<CollectionDisplay whatToDisplay="clothing"/>}/>
                    <Route path="outfits" element={<CollectionDisplay whatToDisplay="outfit"/>}/>
                </Route>
                <Route path="*" element={<Navigate to="/user/closet" replace/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;