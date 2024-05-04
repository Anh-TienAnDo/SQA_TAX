import { Button, Checkbox, Modal, Radio } from "antd";
import "./listUnpaidTax.css";
import { useContext, useState, useEffect } from "react";
import AuthenTaxPayer from "../../context/afterAuthenTaxPayer";
import { getUnpaidTax } from "../../services/unpaidTax";
import Search from "../../context/search";
import UnpaidTax from "../../context/unpaidTax";
import { useNavigate } from "react-router-dom";
import TaxWantPay from "../../context/taxWantPay";
import TaxPayer from "../../context/taxPayer";
import ChiTietThueTienLuongCong from "../ChiTietThueTienLuongCong/chiTietThueTienLuongCong";
import ChiTietThueBDS from "../ChiTietThueBDS/chiTietThueBDS";
import ChiTietThueDauTuVon from "../ChiTietThueDauTuVon/chiTietThueDauTuVon";
import ChiTietThueQuaTang from "../ChiTietThueQuaTang/chiTietThueQuaTang";
import ChiTietThueNhuongQuyenThuongMai from "../ChiTietThueNhuongQuyenThuongMai/chiTietThueNhuongQuyenThuongMai";
import ChiTietThueTrungThuong from "../ChiTietThueTrungThuong/chiTietThueTrungThuong";
import ChiTietThueChuyenNhuongBanQuyen from "../ChiTietThueChuyenNhuongBanQuyen/chiTietThueChuyenNhuongBanQuyen";

function ListUnpaidTax() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { afterAuthenTaxPayer, setAfterAuthenTaxPayer } =
    useContext(AuthenTaxPayer);
  const { search, setSearch } = useContext(Search);
  const { unpaidTax, setUnpaidTax } = useContext(UnpaidTax);
  const { taxWantPay, setTaxWantPay } = useContext(TaxWantPay);
  const { taxPayer, setTaxPayer } = useContext(TaxPayer);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // console.log(search.type)
  useEffect(() => {
    const get = async () => {
      try {
        if (search?.type?.length > 0) {
          const data = search.type.map(async (item) => {
            // Sử dụng `await` trong một arrow function đồng bộ
            const res = await getUnpaidTax(`api/v1/to-khai-${item}/getAll`);
            return res;
          });

          Promise.all(data).then((result) => {
            if (result === undefined) {
              console.log("getUnpaidTax Error");
            } else {
              setUnpaidTax(result.flat());
            }
          });
        } else {
          setTaxWantPay([]);
        }
      } catch (error) {
        // Handle errors that occurred during the API call or data processing
        console.error("An error occurred while fetching unpaid taxes:", error);
        // Optionally set some state to show an error message to the user
      }
    };
    get();
  }, [search]);

  const handelClickTaxWantPay = (taxItemWantPay, checked) => {
    let newTaxWantPay = taxWantPay;
    if (checked === true) {
      newTaxWantPay.push(taxItemWantPay);
    } else {
      newTaxWantPay = taxWantPay.filter(
        (item) =>
          item.id !== taxItemWantPay.id ||
          item.loaiThueId !== taxItemWantPay.loaiThueId
      );
    }
    setTaxWantPay(newTaxWantPay);
  };
  const handleClickPaymentTax = (e) => {
    navigate("/receipt-tax", { state: { taxWantPay: taxWantPay } });
  };
  console.log(unpaidTax);
  return (
    afterAuthenTaxPayer &&
    search?.type?.length > 0 && (
      <div className="content__list-unpaid-tax">
        <div class="content__grid-list-unpaid-tax-container">
          <div class="grid-item-header">Nội dung khoản nộp NSNN</div>
          <div class="grid-item-header">Tổng số tiền (VND)</div>
          <div class="grid-item-header">Xem chi tiết</div>
          <div class="grid-item-header">Chọn khoản nộp</div>
          <div className="container__unpaid-tax">
            {unpaidTax &&
              unpaidTax.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="content__grid-list-unpaid-tax-container">
                      <div class="grid-item">{item.noiDung}</div>
                      <div class="grid-item">
                        {item.tongThuePhaiNop.toLocaleString("de-DE")}{" "}
                      </div>
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
                          <>
                            {() => {
                              if (item.loaiThueId === 1) {
                                return <ChiTietThueTienLuongCong item={item} />;
                              } else if (item.loaiThueId === 2) {
                                return <ChiTietThueBDS item={item} />;
                              } else if (item.loaiThueId === 3) {
                                return <ChiTietThueDauTuVon item={item} />;
                              } else if (item.loaiThueId === 4) {
                                return <ChiTietThueQuaTang item={item} />;
                              } else if (item.loaiThueId === 5) {
                                return (
                                  <ChiTietThueNhuongQuyenThuongMai
                                    item={item}
                                  />
                                );
                              } else if (item.loaiThueId === 6) {
                                return <ChiTietThueTrungThuong item={item} />;
                              } else if (item.loaiThueId === 7) {
                                return (
                                  <ChiTietThueChuyenNhuongBanQuyen
                                    item={item}
                                  />
                                );
                              }
                            }}
                          </>
                        </Modal>
                      </div>
                      <div class="grid-item">
                        {taxWantPay.find(
                          (element) =>
                            item.id === element.id &&
                            item.loaiThueId === element.loaiThueId
                        ) ? (
                          <Checkbox
                            checked
                            onChange={() => handelClickTaxWantPay(item, false)}
                          ></Checkbox>
                        ) : (
                          <Checkbox
                            onChange={() => handelClickTaxWantPay(item, true)}
                          ></Checkbox>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="content__payment-tax">
          <Button type="primary" onClick={handleClickPaymentTax}>
            Thu thuế
          </Button>
        </div>
      </div>
    )
  );
}
export default ListUnpaidTax;
