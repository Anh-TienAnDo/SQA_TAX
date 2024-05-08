package com.sqa.project_sqa.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
@Data
@Entity
//@Table(name = "ThueQuaTang ")

public class ThueQuaTang {
    @Transient
    private Integer loaiThueId;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "noi_dung")
    private String noiDung;

    @Column(name = "trang_thai_da_dong")
    private boolean trangThaiDaDong=false;

    @Column(name = "mst")
    private String mst;
    @ManyToOne
    @JoinColumn(name = "mst", referencedColumnName = "mst", insertable = false, updatable = false)
    @JsonIgnore
    private NguoiDongThue nguoiDongThue;
    @Column(name = "thu_nhap_chiu_thue")
    private long thuNhapChiuThue;

    @Column(name = "tong_thue_phai_nop")
    private long tongThuePhaiNop;

    @Column(name = "thu_nhap_tu_ngay")
    private LocalDate thuNhapTuNgay;

    @Column(name = "thu_nhap_den_ngay")
    private LocalDate thuNhapDenNgay;

    @Column(name = "han_nop_tu_ngay")
    private LocalDate hanNopTuNgay;

    @Column(name = "han_nop_den_ngay")
    private LocalDate hanNopDenNgay;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loai_thue_id")
    @JsonIgnore
    private LoaiThue loaiThue;

}