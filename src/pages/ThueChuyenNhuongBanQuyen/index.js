import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Spin, message } from "antd"
import { useEffect, useRef, useState } from "react";
import ThueChuyenNhuongBDS from "../ThueChuyenNhuongBDS";
import { getTaxPayer } from "../../services/taxPayer";
const { RangePicker } = DatePicker;
function ThueChuyenNhuongBanQuyen () {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const [mst, setMst] = useState();
    useEffect(() => {
    }, [mst])
    const rules = [
        {
            required: true,
            message: "Không được để trống"
        }
    ]
    const handleFinish = (values) => {
        const tuNgay = values.date[0].$d;
        const denNgay = values.date[1].$d;
        console.log(tuNgay)
        console.log(denNgay)
    }
    const handelGetInforTaxPayer = async (e) => {
        const fetch = async () => {
            const res = await getTaxPayer(`tax-payer?mst=${e.target.value}`)
            setMst(res)
            console.log(res)
        }
        fetch()
    }
    return(
        <>
            <Card title="Khai báo thuế thu nhập từ chuyển nhượng bản quyền">
                <Spin spinning={loading}>
                    <Form layout="vertical" onFinish={handleFinish} form={form}>
                        <Row gutter={[20, 10]}>
                            <Col span={24}>
                                <Form.Item label="Mã số thuế" name="mst" rules={rules}>
                                    <Input onBlur={(e) => handelGetInforTaxPayer(e)} />
                                </Form.Item>
                            </Col>
                            {mst && (
                                <Col span={24}>
                                    <Card title="Thông tin người kê khai"></Card>
                                </Col>
                            )}
                            <Col span={24}>
                                <Form.Item label="Thu nhập chịu thuế" name="thuNhapChiuThue" rules={rules}>
                                    <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Khoảng thời gian thu nhập" name="date" rules={rules}>
                                    <RangePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Nộp khai báo</Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Spin>
            </Card>
        </>
    )
}
export default ThueChuyenNhuongBanQuyen