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
public class NguoiDongThue {

    @Id
    private String mst;

    private String hoVaTen;

    private String gioiTinh;

    private Date ngaySinh;

    private String sdt;

    private String email;

    private String CMND;

    private Date CMND_ngayCap;

    private String CMND_noiCap;

    private String CCCD;

    private Date CCCD_ngayCap;

    private String CCCD_noiCap;

    private String dchk_soNhaDuongXom;

    private String dchk_tinhThanhPho;

    private String dchk_QuanHuyen;

    private String dchk_xaPhuong;

    private String dcct_soNhaDuongXom;

    private String dcct_tinhThanhPho;

    private String dcct_QuanHuyen;

    private String dcct_xaPhuong;

    private String taxAgency;



}

