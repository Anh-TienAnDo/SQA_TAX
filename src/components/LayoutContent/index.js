import { Row, Col, Flex } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import CartItem from "../CartItem";
import './style.scss';
function LayoutContent() {
  return (
    <>
      <div className="content">
        <Row gutter={[20, 20]}>
          <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <CartItem title={"Box1"} />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <CartItem title={"Box2"} />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <CartItem title={"Box3"} />
          </Col>
          <Col xxl={6} xl={6} lg={6} md={12} sm={24} xs={24}>
            <CartItem title={"Box4"} />
          </Col>
        </Row>

        <Row gutter={[20, 20]} className="mt-20">
          <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
            <CartItem title={"Box5"} style={{height: "400px"}}/>
          </Col>
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <CartItem title={"Box6"} style={{height: "400px"}}/>
          </Col>
        </Row>

        <Row gutter={[20, 20]} className="mt-20">
          <Col xxl={6} xl={6} lg={6} md={6} sm={24} xs={24}>
            <CartItem title={"Box7"} style={{height: "400px"}}/>
          </Col>
          <Col xxl={18} xl={18} lg={18} md={18} sm={24} xs={24}>
            <CartItem title={"Box8"} style={{height: "400px"}}/>
          </Col>
        </Row>

        <Row gutter={[20, 20]} className="mt-20">
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <CartItem title={"Box9"} style={{height: "400px"}}/>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <CartItem title={"Box10"} style={{height: "400px"}}/>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={8} sm={24} xs={24}>
            <CartItem title={"Box11"} style={{height: "400px"}}/>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LayoutContent;
