import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Spin, message } from "antd"
import { useState } from "react";

function ToKhai(props) {
    const { loaiToKhai } = props
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false);
    const rules = [
        {
            required: true,
            message: "Không được để trống"
        }
    ]
    const handleFinish = () => {

    }
    return (
        <>
            {loaiToKhai === 1 && (
                <Card title="Khai báo Thuế Thu Nhập Tiền Lương Công">
                    <Spin spinning={loading}>
                        <Form layout="vertical" onFinish={handleFinish} form={form}>
                            <Row gutter={[20, 10]}>
                                <Col span={24}>
                                    <Form.Item label="Mã số thuế" name="mst" rules={rules}>
                                        <Input />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Thu nhập chịu thuế" name="thuNhapChiuThue"  rules={rules}>
                                        <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%"}} />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Thu nhập được miễn giảm" name="thuNhapDuocMienGiam" rules={rules}>
                                        <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Khấu trừ cho bản thân" name="khauTruChoBanThan" rules={rules}>
                                        <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Khấu trừ người phụ thuộc" name="khauTruNguoiPhuThuoc" rules={rules}>
                                        <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Khấu trừ cho từ thiện" name="khauTruChoTuThien" rules={rules}>
                                        <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item label="Khấu trừ cho bảo hiểm" name="khauTruChoBaoHiem" rules={rules}>
                                        <InputNumber min={0} addonAfter="VNĐ" style={{ width: "100%"}}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Từ ngày" name="tuNgay" rules={rules}>
                                        <DatePicker style={{width: "100%"}} />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="Đến ngày" name="denNgay" rules={rules}>
                                        <DatePicker style={{width: "100%"}} />
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
            )}
        </>
    )
}
export default ToKhai