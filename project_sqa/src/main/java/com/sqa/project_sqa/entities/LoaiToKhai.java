package com.sqa.project_sqa.entities;

import javax.persistence.*;

@Entity
@Table(name = "LoaiToKhai")
public class LoaiToKhai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "tenToKhai")
    private String tenLoaiToKhai;

    @Column(name = "moTa")
    private String moTa;

    @OneToOne
    @JoinColumn(name = "thue_chuyen_nhuong_ban_quyen_id")
    private ThueChuyenNhuongBanQuyen thueChuyenNhuongBanQuyen;

    @OneToOne
    @JoinColumn(name = "thue_chuyen_nhuong_bds_id")
    private ThueChuyenNhuongBDS thueChuyenNhuongBDS;

    @OneToOne
    @JoinColumn(name = "thue_dau_tu_von_id")
    private ThueDauTuVon thueDauTuVon;

    @OneToOne
    @JoinColumn(name = "thue_nhuong_quyen_thuong_mai_id")
    private ThueNhuongQuyenThuongMai thueNhuongQuyenThuongMai;

    @OneToOne
    @JoinColumn(name = "thue_qua_tang_id")
    private ThueQuaTang thueQuaTang;

    @OneToOne
    @JoinColumn(name = "thue_tien_luong_cong_id")
    private ThueTienLuongCong thueTienLuongCong;

    @OneToOne
    @JoinColumn(name = "thue_trung_thuong_id")
    private ThueTrungThuong thueTrungThuong;


}
