import HomePage from "../pages/user/HomePage"
import HandlePage from "../pages/user/HandlePage"
import ProfilePage from "../pages/user/ProfilePage"
import LoginPage from "../pages/user/LoginPage"
import NotFoundPage from "../pages/user/NotFoundPage"
import RegisterPage from "../pages/user/RegisterPage"

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeader : true
    },
    {
        path: '/handle',
        page: HandlePage,
        isShowHeader : true
    },
    {
        path: '/profile',
        page: ProfilePage,
        isShowHeader : true
    },
    {
        path: '/login',
        page: LoginPage,
    },
    {
        path:'/register',
        page: RegisterPage,
    },
    {
        path: '*',
        page: NotFoundPage,
    },

]
