import { Card, Select } from "antd"
import ThueTienLuongCong from "../ThueTienLuongCong"
import { useEffect, useState } from "react";
import ThueChuyenNhuongBDS from "../ThueChuyenNhuongBDS";
import ThueTrungThuong from "../ThueTrungThuong";
import ThueChuyenNhuongBanQuyen from "../ThueChuyenNhuongBanQuyen";
import ThueDauTuVon from "../ThueDauTuVon";
import ThueNhuongQuyenThuongMai from "../ThueNhuongQuyenThuongMai";
import ThueQuaTang from "../ThueQuaTang";
import { getAllLoaiThue } from "../../services/loaiThueService";

function LoaiToKhai() {
    const [loaiToKhai, setLoaiToKhai] = useState();
    const [danhSachLoaiToKhai, setDanhSachLoaiToKhai] = useState();
    useEffect(() => {
        const fetch = async () => {
            const res = await getAllLoaiThue('api/v1/loai-thue/getAll')
            setDanhSachLoaiToKhai(res)
        }
        fetch()
    },[])
    
    const options = danhSachLoaiToKhai?.map( (item) => {
        const data = {
            label: "Tờ khai " + item.name.toLowerCase(),
            value: item.id
        }
        return data
    })

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
                <ThueDauTuVon />
            )}
            {loaiToKhai === 4 && (
                <ThueQuaTang />
            )}
            {loaiToKhai === 5 && (
                <ThueNhuongQuyenThuongMai />
            )}
            {loaiToKhai === 6 && (
                <ThueTrungThuong />
            )}
            {loaiToKhai === 7 && (
                <ThueChuyenNhuongBanQuyen />
            )}
        </>
    )
}
export default LoaiToKhai