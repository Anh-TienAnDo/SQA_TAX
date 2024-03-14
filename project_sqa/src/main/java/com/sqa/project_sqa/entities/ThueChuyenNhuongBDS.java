package com.sqa.project_sqa.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ThueChuyenNhuongBDS")
public class ThueChuyenNhuongBDS {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "mst")
    private String mst;

    @Column(name = "dia_chi")
    private String diaChi;

    @Column(name = "loai_dat")
    private int loaiDat;

    @Column(name = "gia_tri_chuyen_nhuong")
    private String giaTriChuyenNhuong;

    @Column(name = "tong_thue_phai_nop")
    private long tongThuePhaiNop;

    @Column(name = "tu_ngay")
    private LocalDate tuNgay;

    @Column(name = "den_ngay")
    private LocalDate denNgay;
    @OneToOne(mappedBy = "thueChuyenNhuongBDS")
    private LoaiToKhai loaiToKhai;


}