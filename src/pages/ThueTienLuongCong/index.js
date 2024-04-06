import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Spin, Radio, notification } from "antd"
import { useEffect, useRef, useState } from "react";
import { getDate } from "../../helpers/getTimeCurrent";
import { declaration } from "../../services/declarationService";
const { RangePicker } = DatePicker;

function ThueTienLuongCong() {
    const [notificationApi, contextHolder] = notification.useNotification();
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
    const handleFinish = async (values) => {
        values.tuNgay = getDate(values.date[0].$d);
        values.denNgay = getDate(values.date[1].$d);
        values.date = undefined
        const res = await declaration(values);
        if (!res.message) {
            setLoading(false)
            form.resetFields()
            notificationApi.success({
                message: "Kê khai thành công",
                duration: 3
            })
        }
        else {
            setLoading(false)
            notificationApi.error({
                message: "Kê khai không thành công",
                duration: 3
            })
        }
    }
    return (
        <>
            {contextHolder}
            <Card title="Khai báo thuế thu nhập từ tiền lương công">
                <Spin spinning={loading}>
                    <Form layout="vertical" onFinish={handleFinish} form={form}>
                        <Row gutter={[20, 10]}>
                            <Col span={24}>
                                <Form.Item label="Mã số thuế" name="mst" rules={rules}>
                                    <Input onBlur={(e) => { setMst(e.target.value) }} />
                                </Form.Item>
                            </Col>
                            {mst === "123" && (
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
                                <Form.Item label="Thu nhập được miễn giảm" name="thuNhapDuocMienGiam" rules={rules}>
                                    <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Khấu trừ cho bản thân" name="khauTruChoBanThan" rules={rules}>
                                    <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Khấu trừ người phụ thuộc" name="khauTruNguoiPhuThuoc" rules={rules}>
                                    <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Khấu trừ cho từ thiện" name="khauTruChoTuThien" rules={rules}>
                                    <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Khấu trừ cho bảo hiểm" name="khauTruChoBaoHiem" rules={rules}>
                                    <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label="Trạng thái cư trú" name={"cuTru"} rules={rules}>
                                    <Radio.Group >
                                        <Radio value={true}> Cư trú </Radio>
                                        <Radio value={false}> Không cư trú </Radio>
                                    </Radio.Group>
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
export default ThueTienLuongCong