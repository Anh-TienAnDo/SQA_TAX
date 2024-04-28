import { Card, Select } from "antd"
import ThueTienLuongCong from "../ThueTienLuongCong"
import { useState } from "react";
import ThueChuyenNhuongBDS from "../ThueChuyenNhuongBDS";
import ThueTrungThuong from "../ThueTrungThuong";
import ThueChuyenNhuongBanQuyen from "../ThueChuyenNhuongBanQuyen";
import ThueDauTuVon from "../ThueDauTuVon";
import ThueNhuongQuyenThuongMai from "../ThueNhuongQuyenThuongMai";
import ThueQuaTang from "../ThueQuaTang";

function LoaiToKhai() {
    const [loaiToKhai, setLoaiToKhai] = useState();
    const options = [
        {
            label: "Tờ khai thuế thu nhập cá nhân theo tiền lương công",
            value: 1
        },
        {
            label: "Tờ khai thuế thu nhập từ chuyển nhượng bất động sản",
            value: 2
        },
        {
            label: "Tờ khai thuế thu nhập từ trúng thưởng",
            value: 3
        },
        {
            label: "Tờ khai thuế thu nhập từ bản quyền",
            value: 4
        },
        {
            label: "Tờ khai thuế thu nhập từ nhượng quyền thương mại",
            value: 5
        },
        {
            label: "Tờ khai thuế thu nhập khi đầu tư vốn",
            value: 6
        },
        {
            label: "Tờ khai thuế thu nhập từ nhận quà tặng",
            value: 7
        },
    ]
    const handleChange = (value) => {
        setLoaiToKhai(value)
    }
    return (
        <>
            <Card title="Chọn thông tin loại tờ khai" style={{ marginBottom: 20 }}>
                <Select options={options} placeholder="-- Chọn loại tờ khai --" onChange={handleChange} style={{ width: "100%" }} />
            </Card>
            {loaiToKhai === 1 && (
                <ThueTienLuongCong />
            )}
            {loaiToKhai === 2 && (
                <ThueChuyenNhuongBDS />
            )}
            {loaiToKhai === 3 && (
                <ThueTrungThuong />
            )}
            {loaiToKhai === 4 && (
                <ThueChuyenNhuongBanQuyen />
            )}
            {loaiToKhai === 5 && (
                <ThueNhuongQuyenThuongMai />
            )}
            {loaiToKhai === 6 && (
                <ThueDauTuVon />
            )}
            {loaiToKhai === 7 && (
                <ThueQuaTang />
            )}
        </>
    )
}
export default LoaiToKhai