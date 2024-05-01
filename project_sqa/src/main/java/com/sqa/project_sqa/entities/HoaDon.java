package com.sqa.project_sqa.entities;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HoaDon {
    @Id
    private Integer id;
    @Column(name = "tong_thue_phai_dong")
    private String tongThuePhaiDong;

    @Column(name = "trang_thai")
    private String trangThai;

    @Column(name = "ngay_nop_thue")
    private Date ngayNopThue;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "hoaDon")
    private List<ChiTietHoaDon> chiTietHoaDonList;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "nguoi_dong_thue_id")
    private NguoiDongThue nguoiDongThue;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
}