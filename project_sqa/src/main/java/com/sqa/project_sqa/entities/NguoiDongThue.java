package com.sqa.project_sqa.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
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

    private String dctt_soNhaDuongXom;

    private String dctt_QuocGia;

    private String dctt_tinhThanhPho;

    private String dctt_QuanHuyen;

    private String dctt_xaPhuong;

    private String dcht_soNhaDuongXom;

    private String dcht_tinhThanhPho;

    private String dcht_QuanHuyen;

    private String dcht_xaPhuong;

    private String taxAgency;



}

