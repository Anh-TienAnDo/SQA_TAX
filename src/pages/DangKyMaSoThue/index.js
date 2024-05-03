import React, { useState, useEffect } from 'react';
import './styles.css';

const DangKyMST = () => {
    const [popupTitle, setPopupTitle] = useState('');
    const [popupMessage, setPopupMessage] = useState('');

    // Sử dụng useState để lưu trữ thông tin đăng ký
    const [hoTen, setHoTen] = useState('');
    const [ngaySinh, setNgaySinh] = useState('');
    const [gioiTinh, setGioiTinh] = useState('');
    const [loaiGiayTo, setLoaiGiayTo] = useState('cccd'); // Mặc định là chứng minh nhân dân
    const [soGiayTo, setSoGiayTo] = useState('');
    const [ngayCap, setNgayCap] = useState('');
    const [noiCap, setNoiCap] = useState('');
    const [diaChiHoKhau, setDiaChiHoKhau] = useState({
        soNhaDuong: '',
        xaPhuong: '',
        quanHuyen: '',
        tinhThanhPho: '',
        quocGia: ''
    }


    );
    const [diaChiCuTru, setDiaChiCuTru] = useState({
        soNhaDuong: '',
        xaPhuong: '',
        quanHuyen: '',
        tinhThanhPho: ''
    });
    const [dienThoai, setDienThoai] = useState('');
    const [email, setEmail] = useState('');
    const [coQuanChiTra, setCoQuanChiTra] = useState('');
    const [tinhThanhPhoOptions, setTinhThanhPhoOptions] = useState([]);
    const [quanHuyenOptions, setQuanHuyenOptions] = useState({
        cuTru: [],
        hoKhau: []
    });
    const [xaPhuongOptions, setXaPhuongOptions] = useState({
        cuTru: [],
        hoKhau: []
    });
    const [quocGiaOptions, setQuocGiaOptions] = useState([]);
    const [errors, setErrors] = useState({});
    const [registrationSuccess, setRegistrationSuccess] = useState(false); 
    // Simulate API call to fetch province/city data
    const fetchTinhThanhPho = async () => {
        // Replace this with your API call to fetch province/city data
        const response = await fetch('http://localhost:8080/api/v1/province/getAll');
        const data = await response.json();
        // Assuming the response data is an array of objects with 'name' and 'value' properties
        setTinhThanhPhoOptions(data);
    };

    // Simulate API call to fetch district data
    const fetchQuanHuyen = async (selectedTinhThanhPho, type) => {
        // Replace this with your API call to fetch district data based on selected province/city
        const response = await fetch('http://localhost:8080/api/v1/district/getByProvinceId?' + new URLSearchParams({
            provinceId: selectedTinhThanhPho
        }));
        const data = await response.json();
        if (type === 'cutru') {
            setQuanHuyenOptions((prev) => ({
                ...prev,
                cuTru: data
            }));
        }
        else {
            setQuanHuyenOptions((prev) => ({
                ...prev,
                hoKhau: data
            }));
        }
        // Assuming the response data is an array of objects with 'name' and 'value' properties
    };

    // Simulate API call to fetch commune/ward data
    const fetchXaPhuong = async (selectedQuanHuyen, type) => {
        console.log(selectedQuanHuyen)
        // Replace this with your API call to fetch commune/ward data based on selected district
        const response = await fetch('http://localhost:8080/api/v1/ward/getByDistrictId?' + new URLSearchParams({
            districtId: selectedQuanHuyen
        }));
        const data = await response.json();
        // Assuming the response data is an array of objects with 'name' and 'value' properties
        if (type === 'cutru') {
            setXaPhuongOptions((prev) => ({
                ...prev,
                cuTru: data
            }));
        }
        else {
            setXaPhuongOptions((prev) => ({
                ...prev,
                hoKhau: data
            }));
        }
    };

    // Simulate API call to fetch country data
    const fetchQuocGia = async () => {
        // Replace this with your API call to fetch country data
        const response = await fetch('your_api_endpoint');
        const data = await response.json();
        // Assuming the response data is an array of objects with 'name' and 'value' properties
        setQuocGiaOptions(data);
    };
    // Hàm xóa lỗi khi click vào ô nhập
    const handleInputClick = (fieldName) => {
        setErrors((prevErrors) => ({ ...prevErrors, [fieldName]: '' }));
    };
    useEffect(() => {

        fetchTinhThanhPho();
        fetchQuocGia();
    }, []); // Empty dependency array to run the effect only once when component mounts
      // Hàm kiểm tra định dạng email
    const validateEmail = (email) => {
        // Biểu thức chính quy để kiểm tra định dạng email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Hàm xử lý khi thay đổi giá trị của ô nhập email
    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        // Kiểm tra định dạng email và cập nhật lỗi nếu cần
        if (!validateEmail(newEmail)) {
            setErrors(prevErrors => ({ ...prevErrors, email: 'Địa chỉ email không hợp lệ' }));
        } else {
            // Xóa thông báo lỗi nếu địa chỉ email hợp lệ
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };
    // Hàm xử lý khi form được submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};


        if (hoTen.trim() === '') {
            newErrors.hoTen = 'Vui lòng nhập họ và tên';
        }

        if (ngaySinh.trim() === '') {
            newErrors.ngaySinh = 'Vui lòng chọn ngày sinh';
        }

        if (gioiTinh.trim() === '') {
            newErrors.gioiTinh = 'Vui lòng chọn giới tính';
        }

        if (loaiGiayTo.trim() === 'cmnd' && soGiayTo.trim() === '') {
            newErrors.soGiayTo = 'Vui lòng nhập số CMND';
        } else if (loaiGiayTo.trim() === 'cccd' && soGiayTo.trim() === '') {
            newErrors.soGiayTo = 'Vui lòng nhập số CCCD';
        }

        if (ngayCap.trim() === '') {
            newErrors.ngayCap = 'Vui lòng chọn ngày cấp';
        }

        if (noiCap.trim() === '') {
            newErrors.noiCap = 'Vui lòng nhập nơi cấp';
        }

        if (diaChiHoKhau.soNhaDuong.trim() === '') {
            newErrors.diaChiHoKhau = 'Vui lòng nhập địa chỉ hộ khẩu';
        }

        if (diaChiHoKhau.tinhThanhPho.trim() === '') {
            newErrors.tinhThanhPhoHoKhau = 'Vui lòng chọn tỉnh/thành phố';
        }

        if (diaChiHoKhau.quanHuyen.trim() === '') {
            newErrors.quanHuyenHoKhau = 'Vui lòng chọn quận/huyện';
        }

        if (diaChiHoKhau.xaPhuong.trim() === '') {
            newErrors.xaPhuongHoKhau = 'Vui lòng chọn xã/phường';
        }

        if (diaChiCuTru.soNhaDuong.trim() === '') {
            newErrors.diaChiCuTru = 'Vui lòng nhập địa chỉ cư trú';
        }

        if (diaChiCuTru.tinhThanhPho.trim() === '') {
            newErrors.tinhThanhPhoCuTru = 'Vui lòng chọn tỉnh/thành phố';
        }

        if (diaChiCuTru.quanHuyen.trim() === '') {
            newErrors.quanHuyenCuTru = 'Vui lòng chọn quận/huyện';
        }

        if (diaChiCuTru.xaPhuong.trim() === '') {
            newErrors.xaPhuongCuTru = 'Vui lòng chọn xã/phường';
        }

        if (dienThoai.trim() === '') {
            newErrors.dienThoai = 'Vui lòng nhập số điện thoại';
        }

        if (email.trim() === '') {
            newErrors.email = 'Vui lòng nhập địa chỉ email';
        }

        if (coQuanChiTra.trim() === '') {
            newErrors.coQuanChiTra = 'Vui lòng nhập cơ quan chi trả';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            // Thực hiện hành động submit ở đây
            // Tạo đối tượng mới với tên trường đã thay đổi
            const dataToSend = {
                hoVaTen: hoTen,
                gioiTinh: gioiTinh,
                ngaySinh: ngaySinh,
                loaiGiayTo: loaiGiayTo,
                soGiayTo: soGiayTo,
                ngayCap: ngayCap,
                noiCap: noiCap,

                dchk_soNhaDuongXom: diaChiHoKhau.soNhaDuong,
                dchk_tinhThanhPho: (JSON.parse(diaChiHoKhau.tinhThanhPho).name),
                dchk_QuanHuyen: (JSON.parse(diaChiHoKhau.quanHuyen).name),
                dchk_xaPhuong: diaChiHoKhau.xaPhuong,

                dcct_soNhaDuongXom: diaChiCuTru.soNhaDuong,
                dcct_tinhThanhPho: (JSON.parse(diaChiCuTru.tinhThanhPho).name),
                dcct_QuanHuyen: (JSON.parse(diaChiCuTru.quanHuyen).name),
                dcct_xaPhuong: diaChiCuTru.xaPhuong,


                sdt: dienThoai,
                email: email,
                taxAgency: coQuanChiTra
                // Thêm các trường khác nếu cần
            };

            try {
                // Gửi dữ liệu lên máy chủ
                const response = await fetch('http://localhost:8080/api/v1/dangKy', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dataToSend)
                });

                const responseData = await response.json();
                console.log(responseData)
                // Xử lý phản hồi từ máy chủ nếu cần
                if (response.ok) {
                    setHoTen('');
                    setNgaySinh('');
                    setGioiTinh('');
                    setLoaiGiayTo('cccd');
                    setSoGiayTo('');
                    setNgayCap('');
                    setNoiCap('');
                    setDiaChiHoKhau({
                        soNhaDuong: '',
                        xaPhuong: '',
                        quanHuyen: '',
                        tinhThanhPho: '',
                        quocGia: ''
                    });
                    setDiaChiCuTru({
                        soNhaDuong: '',
                        xaPhuong: '',
                        quanHuyen: '',
                        tinhThanhPho: ''
                    });
                    setDienThoai('');
                    setEmail('');
                    setCoQuanChiTra('');
                    setErrors({});

                    setPopupTitle('Đăng kí thành công!');
                    setPopupMessage( 'Mã số thuế: '+responseData)

                    setRegistrationSuccess(true);
                    
                    console.log('Đã gửi dữ liệu đăng ký lên server thành công!');
                } else {
                    
                    setPopupTitle('Đăng kí thất bại!');
                    setPopupMessage( responseData.message)
                    setRegistrationSuccess(true);
                    if(responseData.code === '01'){
                          newErrors.email = 'Email đã được đăng kí.'
                    }
                    if(responseData.code === '02'){
                        newErrors.dienThoai = 'Số điện thoại đã được đăng kí';

                    }
                    if(responseData.code === '03'){
                        newErrors.soGiayTo = 'Số CCCD đã được đăng kí MST.';

                    }
                    if(responseData.code === '04'){
                        newErrors.soGiayTo = 'Số CMND đã được đăng kí MST.';

                    }
                    
                    
                }

                
            } catch (error) {
                console.error('Đã xảy ra lỗi khi gửi dữ liệu đăng ký lên server:', error);
            }
        }

    };


    return (
        <div>
            <h2 style={{marginLeft: 50}}>Đăng Ký Mã Số Thuế</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Họ và tên:</label>
                    <input type="text" value={hoTen} onChange={(e) => setHoTen(e.target.value)} onClick={() => handleInputClick('hoTen')} />
                    {errors.hoTen && <span className="error-message">{errors.hoTen}</span>}
                </div>
                <div>
                    <label>Ngày tháng năm sinh:</label>
                    <input type="date" value={ngaySinh} onChange={(e) => setNgaySinh(e.target.value)} onClick={() => handleInputClick('ngaySinh')} />
                    {errors.ngaySinh && <span className="error-message">{errors.ngaySinh}</span>}
                </div>
                <div>
                    <label>Giới tính:</label>
                    <select onClick={() => handleInputClick('gioiTinh')} value={gioiTinh} onChange={(e) => setGioiTinh(e.target.value)}>
                        <option value="">Chọn giới tính</option>
                        <option value="nam">Nam</option>
                        <option value="nu">Nữ</option>
                    </select>
                    {errors.gioiTinh && <span className="error-message">{errors.gioiTinh}</span>}
                </div>

                <div>
                    <label>Giấy tờ cá nhân:</label>
                    <select onClick={() => handleInputClick('loaiGiayTo')} value={loaiGiayTo} onChange={(e) => setLoaiGiayTo(e.target.value)}>
                        <option value="cmnd">Chứng minh nhân dân</option>
                        <option value="cccd">Căn cước công dân</option>
                    </select>
                    {errors.loaiGiayTo && <span className="error-message">{errors.loaiGiayTo}</span>}
                </div>
                <div>
                    <label>{loaiGiayTo === 'cccd' ? 'Số CCCD:' : 'Số CMND:'}</label>
                    <input onClick={() => handleInputClick('soGiayTo')} type="text" value={soGiayTo} onChange={(e) => setSoGiayTo(e.target.value)} placeholder={loaiGiayTo === 'cccd' ? 'Số CCCD' : 'Số CMND'} />
                    {errors.soGiayTo && <span className="error-message">{errors.soGiayTo}</span>}
                </div>
                <div>
                    <label>Ngày cấp:</label>
                    <input onClick={() => handleInputClick('ngayCap')} type="date" value={ngayCap} onChange={(e) => setNgayCap(e.target.value)} placeholder="Ngày cấp" />
                    {errors.ngayCap && <span className="error-message">{errors.ngayCap}</span>}
                </div>
                <div>
                    <label>Nơi cấp:</label>
                    <input onClick={() => handleInputClick('noiCap')} type="text" value={noiCap} onChange={(e) => setNoiCap(e.target.value)} placeholder="Nơi cấp" />
                    {errors.noiCap && <span className="error-message">{errors.noiCap}</span>}
                </div>

                <div>
                    <h3>Địa chỉ theo hộ khẩu:</h3>

                    <label>Tỉnh, thành phố:</label>
                    <select onClick={() => handleInputClick('tinhThanhPhoHoKhau')} value={diaChiHoKhau.tinhThanhPho} onChange={(e) => {
                        setDiaChiHoKhau((prev) => ({ ...prev, tinhThanhPho: e.target.value }))
                        setXaPhuongOptions((prev) => ({
                            ...prev,
                            hoKhau: []
                        }))
                        if (JSON.parse(e.target.value)?.code) {
                            fetchQuanHuyen(JSON.parse(e.target.value)?.code, 'hokhau')
                        }
                    }}>
                        <option value="">Chọn tỉnh, thành phố</option>
                        {tinhThanhPhoOptions.map((tinhThanhPho, index) => (
                            <option key={index} label={tinhThanhPho.name} value={JSON.stringify(tinhThanhPho)}>{tinhThanhPho.name}</option>
                        ))}
                    </select>
                    {errors.tinhThanhPhoHoKhau && <span className="error-message">{errors.tinhThanhPhoHoKhau}</span>}
                    <label>Quận, huyện:</label>
                    <select onClick={() => handleInputClick('quanHuyenHoKhau')} value={diaChiHoKhau.quanHuyen} onChange={(e) => {
                        setDiaChiHoKhau({ ...diaChiHoKhau, quanHuyen: e.target.value })
                        if (JSON.parse(e.target.value)?.code) {
                            fetchXaPhuong(JSON.parse(e.target.value)?.code, 'hokhau')
                        }
                    }}>
                        <option value="">Chọn quận, huyện</option>
                        {quanHuyenOptions.hoKhau.map((quanHuyen, index) => (
                            <option key={index} label={quanHuyen.name} value={JSON.stringify(quanHuyen)}>{quanHuyen.name}</option>
                        ))}
                    </select>
                    {errors.quanHuyenHoKhau && <span className="error-message">{errors.quanHuyenHoKhau}</span>}
                    <label>Xã, phường:</label>
                    <select onClick={() => handleInputClick('xaPhuongHoKhau')} value={diaChiHoKhau.xaPhuong} onChange={(e) => setDiaChiHoKhau({ ...diaChiHoKhau, xaPhuong: e.target.value })}>
                        <option value="">Chọn xã, phường</option>
                        {xaPhuongOptions.hoKhau.map((xaPhuong, index) => (
                            <option key={index} value={xaPhuong.value}>{xaPhuong.name}</option>
                        ))}
                    </select>
                    {errors.xaPhuongHoKhau && <span className="error-message">{errors.xaPhuongHoKhau}</span>}
                    <label>Số nhà/đường phố, thôn, xóm:</label>
                    <input onClick={() => handleInputClick('diaChiHoKhau')} type="text" value={diaChiHoKhau.soNhaDuong} onChange={(e) => setDiaChiHoKhau({ ...diaChiHoKhau, soNhaDuong: e.target.value })} placeholder="Số nhà/đường phố, thôn, xóm" />
                    {errors.diaChiHoKhau && <span className="error-message">{errors.diaChiHoKhau}</span>}





                </div>
                <div>

                    <h3>Địa chỉ cư trú:</h3>
                    <label>Tỉnh, thành phố:</label>
                    <select onClick={() => handleInputClick('tinhThanhPhoCuTru')} value={diaChiCuTru.tinhThanhPho} onChange={(e) => {
                        setDiaChiCuTru((prev) => ({ ...prev, tinhThanhPho: e.target.value }))
                        setXaPhuongOptions((prev) => ({
                            ...prev,
                            hoKhau: []
                        }))
                        if (JSON.parse(e.target.value)?.code) {
                            fetchQuanHuyen(JSON.parse(e.target.value)?.code, 'cutru')
                        }
                    }}>
                        <option value="">Chọn tỉnh, thành phố</option>
                        {tinhThanhPhoOptions.map((tinhThanhPho, index) => (
                            <option key={index} label={tinhThanhPho.name} value={JSON.stringify(tinhThanhPho)}>{tinhThanhPho.name}</option>
                        ))}
                    </select>
                    {errors.tinhThanhPhoCuTru && <span className="error-message">{errors.tinhThanhPhoCuTru}</span>}
                    <label>Quận, huyện:</label>
                    <select onClick={() => handleInputClick('quanHuyenCuTru')} value={diaChiCuTru.quanHuyen} onChange={(e) => {
                        setDiaChiCuTru({ ...diaChiCuTru, quanHuyen: e.target.value })
                        if (JSON.parse(e.target.value)?.code) {
                            fetchXaPhuong(JSON.parse(e.target.value)?.code, 'cutru')
                        }
                    }}>
                        <option value="">Chọn quận, huyện</option>
                        {quanHuyenOptions.cuTru.map((quanHuyen, index) => (
                            <option key={index} label={quanHuyen.name} value={JSON.stringify(quanHuyen)}>{quanHuyen.name}</option>
                        ))}
                    </select>
                    {errors.quanHuyenCuTru && <span className="error-message">{errors.quanHuyenCuTru}</span>}
                    <label>Xã, phường:</label>
                    <select onClick={() => handleInputClick('xaPhuongCuTru')} value={diaChiCuTru.xaPhuong} onChange={(e) => setDiaChiCuTru({ ...diaChiCuTru, xaPhuong: e.target.value })}>
                        <option value="">Chọn xã, phường</option>
                        {xaPhuongOptions.cuTru.map((xaPhuong, index) => (
                            <option key={index} value={xaPhuong.value}>{xaPhuong.name}</option>
                        ))}

                    </select>
                    {errors.xaPhuongCuTru && <span className="error-message">{errors.xaPhuongCuTru}</span>}
                    <label>Số nhà/đường phố, thôn, xóm:</label>
                    <input onClick={() => handleInputClick('diaChiCuTru')} type="text" value={diaChiCuTru.soNhaDuong} onChange={(e) => setDiaChiCuTru({ ...diaChiCuTru, soNhaDuong: e.target.value })} placeholder="Số nhà/đường phố, thôn, xóm" />
                    {errors.diaChiCuTru && <span className="error-message">{errors.diaChiCuTru}</span>}







                </div>

                <div>
                    <label>Điện thoại liên hệ:</label>
                    <input onClick={() => handleInputClick('dienThoai')} type="tel" value={dienThoai} onChange={(e) => setDienThoai(e.target.value)} />
                    {errors.dienThoai && <span className="error-message">{errors.dienThoai}</span>}

                </div>
                <div>
                    <label>Email liên hệ:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange} // Sử dụng hàm xử lý mới
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div>
                    <label>Cơ quan chi trả thu phận tại thời điểm đăng ký:</label>
                    <input onClick={() => handleInputClick('coQuanChiTra')} type="text" value={coQuanChiTra} onChange={(e) => setCoQuanChiTra(e.target.value)} />
                    {errors.coQuanChiTra && <span className="error-message">{errors.coQuanChiTra}</span>}

                </div>
                <button type="submit">Đăng ký</button>
            </form>

            {registrationSuccess && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{popupTitle}</h2>
                        <p>{popupMessage}</p>
                        <button onClick={() => setRegistrationSuccess(false)}>Đóng</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default DangKyMST;

