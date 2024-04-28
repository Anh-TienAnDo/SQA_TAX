import LayoutDefault from "../LayoutDefault";
import ReceiptTax from "../pages/Receipt";
import TaxPay from "../pages/TaxPay";
import TaxPayerInfor from "../components/TaxPayerInfor";
import UnpaidTax from "../components/UnpaidTax";
import DangKyMST from '../components/Index'
import LoaiToKhai from "../pages/LoaiToKhai";
export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
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
      {
        path: '/ke-khai-thue',
        element: <LoaiToKhai />
      },
      {
        path: '/register-tax-code',
        element: <DangKyMST />
      }
    ]
  },
  
]