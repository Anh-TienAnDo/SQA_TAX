import { Card, Row, Col, Badge, Table, Button, Spin } from "antd";
import "./style.css";
function Receipt() {
  return (
    <>
      <div className="container">
        <Row>
          <Col span={6}>
            <div className="header__left">
              <p>BỘ TÀI CHÍNH</p>
              <p>TỔNG CỤC THUẾ </p>
              <p>----------</p>
              <p>Cơ quan thu:</p>
              <p>??????</p>
            </div>
          </Col>
          <Col span={12}>
            <div className="header__center">
              <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
              <p>Độc lập - Tự do - Hạnh phúc</p>
              <p> ----------------- </p>
              <p>BIÊN LAI THU THUẾ THU NHẬP CÁ NHÂN</p>
            </div>
          </Col>
          <Col span={6}>
            <div className="header__right">
              <p>
                Mẫu: CTT50{" "}
                <span>
                  <br />
                </span>
                (Ban hành kèm theo Thông tư số 78/2021/TT-BTC ngày 17 tháng 9
                năm 2021 của Bộ Tài chính)
                <span>
                  {" "}
                  <br />{" "}
                </span>
                Ký hiệu:
                <span>
                  {" "}
                  <br />{" "}
                </span>
                Số:
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="content__one">
              <p>Người nộp thuế: ????????</p>
              <p>Mã số thuế: ???????</p>
              <p>Địa chỉ: ????????</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div className="content__two">
              <p>Tổng số thuế phải nộp: </p>
              <div className="content__two-list-tax">
                <p>DANH SÁCH THUẾ PHẢI NỘP GHI Ở ĐÂY</p>
              </div>
              <p>Thuế thu nhập cá nhân :???????????</p>
              <p>Tổng số tiền thuế phải nộp:</p>
              <p>Số tiền bằng chữ phải nộp:</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={8} offset={4}>
            <br />
            <br />
            <div className="footer__left">
              <p>NGƯỜI THU TIỀN</p>
              <p> (Kí, ghi rõ họ, tên) </p>
            </div>
          </Col>

          <Col span={8} offset={4}>
            <div className="footer__right">
              <p>ngày ? tháng ? năm ?</p>
              <p>NGƯỜI NỘP THUẾ </p>
              <p> (Kí, ghi rõ họ, tên) </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Receipt;
