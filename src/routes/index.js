import LayoutDefault from "../layout/LayoutDefault";
import LayoutAdmin from "../layout/LayoutAdmin";
import Login from "../pages/Login"
import LoaiToKhai from "../pages/LoaiToKhai";

export const routes = [
    {
        children: [
            {
                path: "/",
                element: <LayoutDefault />,
                children: [
                    {
                        path: "/login",
                        element: <Login />
                    }
                ]
            },
            {
                path: "/admin",
                element: <LayoutAdmin />,
                children: [
                    {
                        path: "ke-khai-thue",
                        element: <LoaiToKhai />
                    }
                ]
            },
        ]
    }
];
