import { Button, Card, Col, DatePicker, Form, Input, InputNumber, Row, Select, Spin, message, notification } from "antd"
import { useEffect, useRef, useState } from "react";
import { getDate } from "../../helpers/getTimeCurrent";
import { thueluongcong } from "../../services/declarationService";
import { getTaxPayer } from "../../services/taxPayer";
const { RangePicker } = DatePicker;
function ThueChuyenNhuongBDS () {
    const [notificationApi, contextHolder] = notification.useNotification();
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [taxPayer, setTaxPayer] = useState(null);
    const rules = [
        {
            required: true,
            message: "Không được để trống",
        },
    ];
    const handleFinish = async (values) => {
        let path = `api/tk-thue-tien-luong-cong/submit`;
        values.tuNgay = getDate(values.date[0].$d);
        values.denNgay = getDate(values.date[1].$d);
        values.date = undefined;
        const res = await thueluongcong(values, path);
        if (!res.message) {
            setLoading(false);
            form.resetFields();
            notificationApi.success({
                message: "Kê khai thành công",
                duration: 3,
            });
        } else {
            setLoading(false);
            notificationApi.error({
                message: "Kê khai không thành công",
                duration: 3,
            });
        }
    };

    const handelGetInforTaxPayer = async (e) => {
        const fetch = async () => {
            const res = await getTaxPayer(`tax-payer?mst=${e.target.value}`);
            setTaxPayer(res[0]);
            console.log(res);
        };
        fetch();
    };
    return(
        <>
            {contextHolder}
            <Card title="Khai báo thuế thu nhập từ chuyển nhượng bất động sản">
                <Spin spinning={loading}>
                    <Form layout="vertical" onFinish={handleFinish} form={form}>
                        <Row gutter={[20, 10]}>
                        <Col span={24}>
                                <Form.Item
                                    label="Mã số thuế"
                                    name="mst"
                                    rules={[
                                        {
                                            validator: async (_, value) => {
                                                if (value) {
                                                    const res = await getTaxPayer(
                                                        `tax-payer?mst=${value}`
                                                    );
                                                    if (res?.length > 0) {
                                                        setTaxPayer(res[0]);
                                                        return Promise.resolve();
                                                    } else {
                                                        return Promise.reject("Không tồn tại");
                                                    }
                                                }
                                            },
                                        },
                                        ...rules
                                    ]}
                                >
                                    <Input onBlur={(e) => handelGetInforTaxPayer(e)} />
                                </Form.Item>
                            </Col>
                            {taxPayer && (
                                <Col span={24}>
                                    <Card title="Thông tin người kê khai">
                                        <div className="content__tax-payer-infor">
                                            <table className="content__table">
                                                <thead>
                                                    <tr>
                                                        <th>Thông Tin</th>
                                                        <th>Chi Tiết</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {taxPayer && (
                                                        <>
                                                            <tr>
                                                                <td>Mã số thuế</td>
                                                                <td>{taxPayer.mst}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Căn cước công dân</td>
                                                                <td>{taxPayer.cccd}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Tên người nộp thuế</td>
                                                                <td>{taxPayer.hoVaTen}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Ngày sinh</td>
                                                                <td>{taxPayer.ngaySinh}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Giới tính</td>
                                                                <td>{taxPayer.gioiTinh}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Thành phố</td>
                                                                <td>{taxPayer.dchk_tinhThanhPho}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Quận/huyện</td>
                                                                <td>{taxPayer.dchk_QuanHuyen}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Điện thoại</td>
                                                                <td>{taxPayer.sdt}</td>
                                                            </tr>
                                                        </>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </Card>
                                </Col>
                            )}
                            <Col span={24}>
                                <Form.Item label="Giá trị chuyển nhượng" name="giaTriChuyenNhuong" rules={rules}>
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
export default ThueChuyenNhuongBDS