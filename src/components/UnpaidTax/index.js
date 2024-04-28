import { Button, Checkbox, Modal } from "antd";
import "./listUnpaidTax.css";
import { useContext, useState, useEffect } from "react";
import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
import { getUnpaidTax } from "../../services/unpaidTax";
import Search from "../../context/search";
import UnpaidTax from "../../context/unpaidTax";
import { useNavigate } from "react-router-dom";
import TaxWantPay from "../../context/taxWantPay";
import TaxPayer from "../../context/taxPayer";

function ListUnpaidTax() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } =
    useContext(AuthenTaxPayer);
  const { search, setSearch } = useContext(Search);
  const { unpaidTax, setUnpaidTax } = useContext(UnpaidTax);
  const {taxWantPay,setTaxWantPay} = useContext(TaxWantPay);
  const {taxPayer,setTaxPayer} = useContext(TaxPayer);
  
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const get = async () => {
      try {
        if (search) {
          const data = await getUnpaidTax(
            `unpaid-tax?tenLoaiToKhai=${encodeURIComponent(search.type)}`
          );

          if (data) {
            const newUnpaidTax = data.filter(
              (item) => item["tenLoaiToKhai"] === search.type
            );
            if (newUnpaidTax) {
              setUnpaidTax(newUnpaidTax);
              console.log(newUnpaidTax);
            } else {
              // Handle the case where the search did not return any matching unpaid tax
              console.log("No matching unpaid tax found");
            }
          } else {
            // Handle the case where the data is null or undefined
            console.log("No data received from the API");
          }
        }
      } catch (error) {
        // Handle errors that occurred during the API call or data processing
        console.error("An error occurred while fetching unpaid taxes:", error);
        // Optionally set some state to show an error message to the user
      }
    };

    get();
  }, [search]);

  const handelClickTaxWantPay = (taxItemWantPay) => {
    const newTaxWantPay = taxWantPay;
    newTaxWantPay.push(taxItemWantPay)
    setTaxWantPay(newTaxWantPay)
  };
  const handleClickPaymentTax = (e) => {
    navigate('/receipt-tax')
  }
  return (
    afterAuthenTaxPayer && (
      <div className="content__list-unpaid-tax">
        <div class="content__grid-list-unpaid-tax-container">
          <div class="grid-item-header">Nội dung khoản nộp NSNN</div>
          <div class="grid-item-header">Số tiền (VND)</div>
          <div class="grid-item-header">Số thuế đã nộp tại NH/TT</div>
          <div class="grid-item-header">Xem chi tiết</div>
          <div class="grid-item-header">Chọn khoản nộp</div>

          {unpaidTax &&
            unpaidTax.map((item) => {
              return (
                <>
                  <div class="grid-item">
                    4944 - Tiền chậm nộp các khoản khác điều tiết 100% ngân sách
                    địa phương theo quy định của pháp luật do ngành thuế quản lý
                  </div>
                  <div class="grid-item">{item.tongThuePhaiNop}</div>
                  <div class="grid-item">0</div>
                  <div class="grid-item">
                    <Button type="link" onClick={showModal}>
                      Xem
                    </Button>
                    <Modal
                      title={<h3>Chi tiết thuế phải nộp</h3>}
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      width={1400}
                    >
                        <table class="data-table">
                          <thead>
                            <tr>
                              <th>Mã số thuế</th>
                              <th>Thu Nhập Chịu Thuế</th>
                              <th>Thu Nhập Được Miễn Giảm</th>
                              <th>Khấu Trừ Cho Bản Thân</th>
                              <th>Khấu Trừ Người Phụ Thuộc</th>
                              <th>Khấu Trừ Cho Từ Thiện</th>
                              <th>Khấu Trừ Cho Bảo Hiểm</th>
                              <th>Cư Trú</th>
                              <th>Tổng Thuế Phải Nộp</th>
                              <th>Từ Ngày</th>
                              <th>Đến Ngày</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>123456789</td>
                              <td>50,000,000</td>
                              <td>10,000,000</td>
                              <td>9,000,000</td>
                              <td>3,600,000</td>
                              <td>2,000,000</td>
                              <td>5,000,000</td>
                              <td>Yes</td>
                              <td>5,000,000</td>
                              <td>2023-01-01</td>
                              <td>2023-12-31</td>
                            </tr>
                          </tbody>
                        </table>
                    </Modal>
                  </div>

                  <div class="grid-item">
                    <Checkbox onChange={() => handelClickTaxWantPay(item)}></Checkbox>
                  </div>
                </>
              );
            })}
        </div>
        <div className="content__payment-tax">
          <Button type="primary" onClick={handleClickPaymentTax}>Thu thuế</Button>
        </div>
      </div>
    )
  );
}
export default ListUnpaidTax;
