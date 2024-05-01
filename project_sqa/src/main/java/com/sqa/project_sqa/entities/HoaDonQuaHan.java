package com.sqa.project_sqa.entities;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HoaDonQuaHan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "tien_phat")
    private double tienPhat;

    @Column(name = "so_ngay_qua_han")
    private int soNgayQuaHan;


    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "chi_tiet_thue_id")
    private ChiTietThue chiTietThue;

}
