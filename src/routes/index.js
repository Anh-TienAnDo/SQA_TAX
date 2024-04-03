import LayoutDefault from "../layout/LayoutDefault";
import LayoutAdmin from "../layout/LayoutAdmin";
import Login from "../pages/Login"
import LoaiToKhai from "../pages/LoaiToKhai";
import DangKyMST from "../pages/DangKyMst";
import TaxPay from "../pages/TaxPay";
import TaxPayerInfor from "../pages/TaxPayerInfor";
import ListUnpaidTax from "../pages/ListUnpaidTax";

export const routes = [
    {
        children: [
            {
                path: "/",
                element: <LayoutDefault />,
                children: [
                    {
                        path: "login",
                        element: <Login />
                    },
                    {
                        path: "ke-khai-thue",
                        element: <LoaiToKhai />
                    },
                    {
                        path: "dang-ky-ma-so-thue",
                        element: <DangKyMST />
                    },
                    {
                        path: 'tax-pay',
                        element: <TaxPay />,
                        children: [
                            {
                                path: 'tax-payer-infor',
                                element: <TaxPayerInfor />
                            },
                            {
                                path: 'list-unpaid-tax',
                                element: <ListUnpaidTax />
                            }
                        ]
                    },
                ]
            },
        ]
    }
];
