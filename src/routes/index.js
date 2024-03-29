import LayoutDefault from "../LayoutDefault";
import LayoutContent from "../components/LayoutContent";
import TaxDeclaration from "../pages/TaxDeclaration";
import Receipt from "../pages/Receipt";
import Register from "../pages/Register";
import TaxPay from "../pages/TaxPay";
import TaxPayerInfor from "../components/TaxPayerInfor";
import ListUnpaidTax from "../components/ListUnpaidTax";
export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/',
        element: <LayoutContent />
      },
      {
        path: '/tax-declaration',
        element: <TaxDeclaration /> 
      },
      {
        path: '/receipt',
        element: <Receipt /> 
      },
      {
        path: '/tax-pay',
        element: <TaxPay />,
        children: [
          {
            path: 'tax-payer-infor',
            element: <TaxPayerInfor/>
          },
          {
            path: 'list-unpaid-tax',
            element: <ListUnpaidTax/>
          }
        ]
      },
      {
        path: '/register',
        element: <Register /> 
      }
    ]
  }
]