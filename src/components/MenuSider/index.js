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
  getItem(<Link to="/register-tax-code">Đăng ký mã số thuế</Link>, "sub2", <AccountBookOutlined />, ),
  getItem(<Link to="/ke-khai-thue">Kê khai thuế</Link>, "sub2", <AccountBookOutlined />, ),
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
