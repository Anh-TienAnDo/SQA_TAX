package com.sqa.project_sqa.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "ToKhaiThue")
public class ToKhaiThue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "trangThaiThanhToan")

    private Boolean trangThaiThanhToan;
    @Column(name = "tuNgay")

    private LocalDate tuNgay;
    @Column(name = "denNgay")

    private LocalDate  denNgay;
//    @OneToMany(mappedBy = "ToKhaiThue",fetch = FetchType.EAGER)
//    private List<LoaiToKhai> loaiToKhai;
    @ManyToOne
    @JoinColumn(name = "idNguoiNopThue", referencedColumnName = "id")
    private NguoiNopThue nguoiNopThue;

}
