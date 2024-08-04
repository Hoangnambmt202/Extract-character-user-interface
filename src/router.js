import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/homePage";
import ProfilePage from "./pages/user/profilePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/user/themes/masterLayout";

const renderUserRouter = () =>  {
    const userRouters = [
        {
            path: ROUTERS.USERS.HOME,
            component: <HomePage/>
        },
        {
            path: ROUTERS.USERS.PROFILE,
            component: <ProfilePage/>
        }
    ]
    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item,key)=>(
                        <Route 
                        key={key} 
                        path={item.path} 
                        element={item.component}
                        />
                        )
                    )
                }
            </Routes>
        </MasterLayout>

    )
}

const RouterCustom = () => {
    return renderUserRouter()
}
export default RouterCustom;