import { Menu } from "antd";
import {Link} from 'react-router-dom'
import {
  DashboardOutlined,
  AppstoreOutlined,
  LayoutOutlined,
  PieChartOutlined,
  FileOutlined,
  LockOutlined,
  AccountBookOutlined,
  PlusOutlined,
} from "@ant-design/icons";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "sub1", <DashboardOutlined />, [
    getItem("Default", "1"),
    getItem("CRM", "2"),
    getItem("E-commerce", "3"),
    getItem("Projects", "4"),
  ]),
  getItem("Apps", "sub2", <AppstoreOutlined />, [
    getItem("Chart", "5"),
    getItem("File Manager", "6"),
    getItem("Mail", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  getItem("Components", "sub3", <LayoutOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem("Chart", "sub4", <PieChartOutlined />, []),
  getItem("Pages", "sub5", <FileOutlined />, []),
  getItem("Authentication", "sub6", <LockOutlined />, []),
  getItem(<Link to="/book-room">Book Room</Link>, "sub7", <AccountBookOutlined />, ),
  getItem(<Link to="/create-room">Create Room</Link>, "sub8", <PlusOutlined />, ),
  getItem(<Link to="/list-room">List Room</Link>, "sub9", <PlusOutlined />, ),
  getItem(<Link to="/qr-code">QRCode</Link>, "sub10", <PlusOutlined />, ),
];

function MenuSider() {
  return (
    <Menu
      mode="inline"
      items={items}
      defaultSelectedKeys={["sub1"]}
    />
  );
}

export default MenuSider;
