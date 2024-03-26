import { Menu } from "antd"
import { DashboardOutlined, UserOutlined, FileTextOutlined , FileDoneOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
function MenuSider() {
    const items = [
        {
            label: <Link to={"/admin"}>Tổng quan</Link>,
            icon: <DashboardOutlined />,
            key: "dashboard"
        },
        {
            label: <Link to={"register"}>Đăng ký mã số thuế</Link>,
            icon: <UserOutlined />,
            key: "info-company"
        },
        {
            label: <Link to={"ke-khai-thue"}>Kê khai thuế</Link>,
            icon: <FileTextOutlined />,
            key: "kekhaithue"
        },
        {
            label: <Link to={"thanhtoan"}>Thanh toán thuế</Link>,
            icon: <FileDoneOutlined />,
            key: "thanhtoan"
        },
    ]
    return (
        <>
            <Menu items={items} mode="vertical" defaultSelectedKeys={["dashboard"]}>

            </Menu>
        </>
    )
}
export default MenuSider