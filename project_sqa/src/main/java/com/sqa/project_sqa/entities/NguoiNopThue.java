package com.sqa.project_sqa.entities;

import javax.persistence.*;

@Entity
@Table(name = "NguoiNopThue")
public class NguoiNopThue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "name")

    private String name;
    @Column(name = "ma_so_thue")

    private String MST;
    @Column(name = "CCCD")

    private String CCCD;
    @Column(name = "so_dien_thoai")

    private String sdt;
    @Column(name = "email")

    private String email;

}
