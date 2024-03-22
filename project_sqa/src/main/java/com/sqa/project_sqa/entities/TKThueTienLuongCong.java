package com.sqa.project_sqa.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TKThueTienLuongCong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @ManyToOne
    @JoinColumn(name = "mst", referencedColumnName = "mst", insertable = false, updatable = false)
    private NguoiDongThue nguoiDongThue;

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


}
