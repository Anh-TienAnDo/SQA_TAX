CREATE TABLE LoaiToKhai (
  id INT(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ToKhai (
  id INT(10) NOT NULL,
  LoaiToKhaiId INT(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (LoaiToKhaiId) REFERENCES LoaiToKhai(id)
);

CREATE TABLE HoaDonChuaDong (
  id INT(10) NOT NULL,
  ngayBatDauNop DATE NOT NULL,
  tongSoTien DOUBLE(10, 2) NOT NULL,
  ngayHetHanNop DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE ChiTietHoaDon (
  id INT(10) NOT NULL,
  HoaDonChuaDongId INT(10) NOT NULL,
  ToKhaiId INT(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (HoaDonChuaDongId) REFERENCES HoaDonChuaDong(id),
  FOREIGN KEY (ToKhaiId) REFERENCES ToKhai(id)
);

CREATE TABLE HoaDonDaDong (
  id INT(10) NOT NULL,
  ngayDong DATE NOT NULL,
  tongSoTienDong DOUBLE(10, 2) NOT NULL,
  HoaDonChuaDongId INT(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (HoaDonChuaDongId) REFERENCES HoaDonChuaDong(id)
);

CREATE TABLE HoaDonQuaHanDongThue (
  id INT(10) NOT NULL,
  soNgayQuaHan INT(10) NOT NULL,
  tienPhat FLOAT(10, 2) NOT NULL,
  HoaDonChuaDongId INT(10) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (HoaDonChuaDongId) REFERENCES HoaDonChuaDong(id)
);
