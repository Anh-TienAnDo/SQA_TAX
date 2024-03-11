package com.sqa.project_sqa.entities;

import javax.persistence.*;

@Entity
@Table(name = "LoaiToKhai")
public class LoaiToKhai {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "tenLoaiToKhai")

    private String tenLoaiToKhai;
    @Column(name = "tongThuNhap")

    private double tongThuNhap;
    @Column(name = "soNguoiPhuThuoc")

    private int soNguoiPhuThuoc;
    @Embedded
    private KhauTru khauTru;

    @Column(name = "thoiGianLaoDong")

    private int thoiGianLaoDong; // trên 3 tháng ,  dưới 3 tháng
    @Column(name = "tongSoThuePhaiNop")

    private double tongSoThuePhaiNop;
    @ManyToOne
    @JoinColumn(name = "IdToKhaiThue", referencedColumnName = "id")
    private ToKhaiThue toKhaiThue;
}
