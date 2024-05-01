package com.sqa.project_sqa.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
@Data
@Entity
//@Table(name = "ThueTrungThuong ")
public class ThueTrungThuong {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "noi_dung")
    private String noiDung;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "mst", referencedColumnName = "mst", insertable = false, updatable = false)
    private NguoiDongThue nguoiDongThue;
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


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "loai_thue_id")
    @JsonBackReference
    private LoaiThue loaiThue;

}