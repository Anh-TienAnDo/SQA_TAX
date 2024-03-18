
package com.sqa.project_sqa.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ThueTienLuongCong")
public class ThueTienLuongCong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "mst")
    private String mst;

    @Column(name = "thu_nhap_chiu_thue")
    private long thuNhapChiuThue;

    @Column(name = "thu_nhap_duoc_mien_giam")
    private long thuNhapDuocMienGiam;

    @Column(name = "khau_tru_cho_ban_than")
    private long khauTruChoBanThan;

    @Column(name = "khau_tru_nguoi_phu_thuoc")
    private long khauTruNguoiPhuThuoc;

    @Column(name = "khau_tru_cho_tu_thien")
    private long khauTruChoTuThien;

    @Column(name = "khau_tru_cho_bao_hiem")
    private long khauTruChoBaoHiem;

    @Column(name = "tong_thue_phai_nop")
    private long tongThuePhaiNop;

    @Column(name = "tu_ngay")
    private LocalDate tuNgay;

    @Column(name = "den_ngay")
    private LocalDate denNgay;
    @OneToOne(mappedBy = "thueTienLuongCong")
    private LoaiToKhai loaiToKhai;

    public ThueTienLuongCong() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMst() {
        return mst;
    }

    public void setMst(String mst) {
        this.mst = mst;
    }

    public long getThuNhapChiuThue() {
        return thuNhapChiuThue;
    }

    public void setThuNhapChiuThue(long thuNhapChiuThue) {
        this.thuNhapChiuThue = thuNhapChiuThue;
    }

    public long getThuNhapDuocMienGiam() {
        return thuNhapDuocMienGiam;
    }

    public void setThuNhapDuocMienGiam(long thuNhapDuocMienGiam) {
        this.thuNhapDuocMienGiam = thuNhapDuocMienGiam;
    }

    public long getKhauTruChoBanThan() {
        return khauTruChoBanThan;
    }

    public void setKhauTruChoBanThan(long khauTruChoBanThan) {
        this.khauTruChoBanThan = khauTruChoBanThan;
    }

    public long getKhauTruNguoiPhuThuoc() {
        return khauTruNguoiPhuThuoc;
    }

    public void setKhauTruNguoiPhuThuoc(long khauTruNguoiPhuThuoc) {
        this.khauTruNguoiPhuThuoc = khauTruNguoiPhuThuoc;
    }

    public long getKhauTruChoTuThien() {
        return khauTruChoTuThien;
    }

    public void setKhauTruChoTuThien(long khauTruChoTuThien) {
        this.khauTruChoTuThien = khauTruChoTuThien;
    }

    public long getKhauTruChoBaoHiem() {
        return khauTruChoBaoHiem;
    }

    public void setKhauTruChoBaoHiem(long khauTruChoBaoHiem) {
        this.khauTruChoBaoHiem = khauTruChoBaoHiem;
    }

    public long getTongThuePhaiNop() {
        return tongThuePhaiNop;
    }

    public void setTongThuePhaiNop(long tongThuePhaiNop) {
        this.tongThuePhaiNop = tongThuePhaiNop;
    }

    public LocalDate getTuNgay() {
        return tuNgay;
    }

    public void setTuNgay(LocalDate tuNgay) {
        this.tuNgay = tuNgay;
    }

    public LocalDate getDenNgay() {
        return denNgay;
    }

    public void setDenNgay(LocalDate denNgay) {
        this.denNgay = denNgay;
    }

    public LoaiToKhai getLoaiToKhai() {
        return loaiToKhai;
    }

    public void setLoaiToKhai(LoaiToKhai loaiToKhai) {
        this.loaiToKhai = loaiToKhai;
    }
}