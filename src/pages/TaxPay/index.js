import { Layout, Select, Button, InputNumber, Table, Checkbox } from "antd";
import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { EyeOutlined } from "@ant-design/icons";
import "./taxpay.css";

import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
import { getAllCategoryTax } from "../../services/categoryTax";
import Search from "../../context/search";
import { getAllTaxPayer } from "../../services/taxPayer";
const { Content } = Layout;
function TaxPay() {
  const navigate = useNavigate();
  const [allTaxPayer, setAllTaxPayer] = useState([]);
  const [categoryTax, setCategoryTax] = useState([]);
  const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } =
    useContext(AuthenTaxPayer);
  const [taxPayer, setTaxPayer] = useState({});
  const { search, setSearch } = useContext(Search);
  const taxNumberRef = useRef();
  const CCCDNumberRef = useRef();
  const searchPaymentInformationRef = useRef();

  // get all taxpayer
  useEffect(() => {
    const get = async () => {
      try {
        const newTaxPayer = await getAllTaxPayer('tax-payer'); 
        setAllTaxPayer(newTaxPayer);
      } catch (error) {
        // Handle any errors appropriately
        console.error("An error occurred while fetching tax payers:", error);
      }
    };
    get();
  }, []);


  // category_Tax
  useEffect(() => {
    const get = async () => {
      const data = await getAllCategoryTax("category-tax");
      const newCategoryTax = data.map((item) => ({
        value: item.name,
        label: item.name,
      }));
      setCategoryTax(newCategoryTax);
    };
    get();
  }, []);

  const handleUnpaidTaxSearched = () => {
    if (afterAuthenTaxPayer) {
      navigate("/tax-pay/unpaid-tax");
    } else {
      alert(
        "Vui lòng xác thực thông tin người đóng thuế trước khi tra cứu thông tin khoản nộp"
      );
    }
  };

  const handelTaxCodeSearched = async (e) => {
    if (Array.isArray(allTaxPayer) ) {
      setSearch({
        type: "mst",
        data: taxNumberRef.current.value,
      });
      let newTaxPayer = allTaxPayer.find(item => item[search.type] === search.data)
      if (newTaxPayer) {
        await navigate('/tax-pay/tax-payer-infor');
      }
      else{
        alert(
          "Mã số thuế cần tìm không có trong cơ sở dữ liệu. Vui lòng nhập lại"
        );
      }
    }
  };

  const handleCCCDSearched = async (e) => {
    if (Array.isArray(allTaxPayer) ) {
      setSearch({
        type: "CCCD",
        data: CCCDNumberRef.current.value,
      });
      let newTaxPayer = await allTaxPayer.find(item => item[search.type] === search.data);
      
      if (newTaxPayer) {
        await navigate('/tax-pay/tax-payer-infor'); // Sử dụng await ở đây
      } else {
        alert(
          "Căn cước công dân cần tìm không có trong cơ sở dữ liệu. Vui lòng nhập lại"
        );
      }
    }
  };
  

  const handleClickInforDetail = (e) => {
    navigate("/tax-pay/tax-payer-infor");
  };
  const handleClickInforTaxPayerSearch = (e) => {
    setAfterAuthenTaxPayer(false);
    navigate("/tax-pay");
  };

  const handelSelectCategoryTax = (value) => {
    setSearch({
      type: value
    })
  }

  return (
    <Layout className="layout-taxpay">
      {afterAuthenTaxPayer && (
        <div className="header__infor-taxer">
          <div className="header__infor-title">
            <h3>Thông tin người đóng thuế</h3>
          </div>
          <table className="header__table-payer-infor">
            <tr>
              <th>Thông Tin</th>
              <th>Chi Tiết</th>
            </tr>
            <tr>
              <td>Mã số thuế</td>
              <td>123456789</td>
            </tr>
            <tr>
              <td>Căn cước công dân</td>
              <td>987654321</td>
            </tr>
            <tr>
              <td>Tên người nộp thuế</td>
              <td>Nguyễn Văn A</td>
            </tr>
          </table>
          <div className="header__infor-detailAndSearch">
            <Button
              style={{ marginTop: 20 }}
              type="primary"
              onClick={handleClickInforDetail}
            >
              Xem chi tiết thông tin người đóng thuế
            </Button>

            <Button
              style={{ marginTop: 20, marginLeft: 30 }}
              type="primary"
              onClick={handleClickInforTaxPayerSearch}
            >
              Tra cứu thông tin người đóng thuế
            </Button>
          </div>
        </div>
      )}

      <div className="layout-taxpay__header">
        {!afterAuthenTaxPayer && (
          <div className="header__tax-payer-search">
            <div className="header__tax-code">
              <div className="header__tax-title">Tra cứu mã số thuế:</div>
              <div className="header__tax-number">
                <InputNumber
                  ref={taxNumberRef}
                  min={10000000000}
                  max={99999999999}
                  defaultValue={3}
                />
              </div>

              <div className="header__search">
                <Button type="primary" onClick={handelTaxCodeSearched}>
                  Tra cứu
                </Button>
              </div>
            </div>
            <div className="header__cccd-code">
              <div className="header__cccd-title">
                Tra cứu căn cước công dân:
              </div>
              <div className="header__cccd-number">
                <InputNumber
                  ref={CCCDNumberRef}
                  min={100000000000}
                  max={999999999999}
                  defaultValue={3}
                />
              </div>
              <div className="header__search">
                <Button type="primary" onClick={handleCCCDSearched}>
                  Tra cứu
                </Button>
              </div>
            </div>
          </div>
        )}
        {afterAuthenTaxPayer && (
          <div className="header__taxpay">
            <div className="header__title">
              <h3>Tra cứu thông tin khoản nộp:</h3>
            </div>
            <div>
              <Select
                ref = {searchPaymentInformationRef}
                placeholder="Chọn loại thuế cần thanh toán"
                style={{ width: 250, marginLeft: 20 }}
                onChange={handelSelectCategoryTax}
                options={categoryTax}
              />
              <div className="header__search">
                <Button type="primary" onClick={handleUnpaidTaxSearched}>
                  Tra cứu
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
}
export default TaxPay;
