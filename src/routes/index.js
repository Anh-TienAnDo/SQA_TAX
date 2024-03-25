import LayoutDefault from "../LayoutDefault";
import BookRoom from "../pages/BookRoom";
import LayoutContent from "../components/LayoutContent";
import CreateRoom from "../pages/CreateRoom";
import ListRoom from "../pages/ListRoom";
import Code from "../pages/QRCode";
import TaxDeclaration from "../pages/TaxDeclaration";
import DangKyMST from "../pages/dang-ki-mst";
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
        path: '/book-room',
        element: <BookRoom />
      },
      {
        path: '/create-room',
        element: <CreateRoom />
      },
      {
        path: '/list-room',
        element: <ListRoom />
      },
      {
        path: '/qr-code',
        element: <Code />
      },
      {
        path: '/tax-declaration',
        element: <TaxDeclaration /> 
      },
      {
        path: '/dang-ki-ma-so-thue',
        element: <DangKyMST/> 
      },

    ]
  }
]