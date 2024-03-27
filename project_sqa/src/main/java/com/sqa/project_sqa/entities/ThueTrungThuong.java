package com.sqa.project_sqa.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "ThueTrungThuong ")
public class ThueTrungThuong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "mst")
    private String mst;

    @Column(name = "thu_nhap_chiu_thue")
    private long thuNhapChiuThue;

    @Column(name = "tong_thue_phai_nop")
    private long tongThuePhaiNop;

    @Column(name = "tu_ngay")
    private LocalDate tuNgay;

    @Column(name = "den_ngay")
    private LocalDate denNgay;
    @OneToOne(mappedBy = "thueTrungThuong")
    private LoaiToKhai loaiToKhai;
}