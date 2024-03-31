import { Menu } from "antd";
import {Link} from 'react-router-dom'
import {
  AccountBookOutlined,
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
  getItem(<Link to="/tax-pay">Thu thuế</Link>, "sub1", <AccountBookOutlined />, ),
  // getItem(<Link to="/create-room">Tính Thuế</Link>, "sub2", <PlusOutlined />, ),
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
