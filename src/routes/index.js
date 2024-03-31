import LayoutDefault from "../LayoutDefault";
import TaxDeclaration from "../pages/TaxDeclaration";
import ReceiptTax from "../pages/Receipt";
import Register from "../pages/Register";
import TaxPay from "../pages/TaxPay";
import TaxPayerInfor from "../components/TaxPayerInfor";
import UnpaidTax from "../components/UnpaidTax";
export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/tax-declaration',
        element: <TaxDeclaration /> 
      },
      {
        path: '/receipt-tax',
        element: <ReceiptTax /> 
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
            path: 'unpaid-tax',
            element: <UnpaidTax/>
          },
        ]
      },
    ]
  },
  {
    path: '/register',
    element: <Register /> 
  }
]