package com.sqa.project_sqa.entities;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
@Data
@Entity
@Table(name = "ThueChuyenNhuongBDS")
public class ThueChuyenNhuongBDS {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "mst")
    private String mst;
    @ManyToOne
    @JoinColumn(name = "mst", referencedColumnName = "mst", insertable = false, updatable = false)
    private TaxPayer taxPayer;
    @Column(name = "dia_chi")
    private String diaChi;

    @Column(name = "loai_dat")
    private int loaiDat;

    @Column(name = "gia_tri_chuyen_nhuong")
    private long giaTriChuyenNhuong;

    @Column(name = "tong_thue_phai_nop")
    private long tongThuePhaiNop;

    @Column(name = "tu_ngay")
    private LocalDate tuNgay;

    @Column(name = "den_ngay")
    private LocalDate denNgay;



}