
    package com.sqa.project_sqa.entities;

    import com.fasterxml.jackson.annotation.JsonBackReference;
    import lombok.AllArgsConstructor;
    import lombok.Getter;
    import lombok.NoArgsConstructor;
    import lombok.Setter;

    import javax.persistence.*;
    import java.time.LocalDate;

    @Entity
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
//    @Table(name = "ThueTienLuongCong")
    public class ThueTienLuongCong {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private int id;
        @Column(name = "noi_dung")
        private String noiDung;
        @Column(name = "mst")
        private String mst;
        @ManyToOne
        @JoinColumn(name = "mst", referencedColumnName = "mst", insertable = false, updatable = false)
        private NguoiDongThue nguoiDongThue;
//        @Min(value = 0, message = "Giá trị không hợp lệ")
        @Column(name = "thu_nhap_chiu_thue")
        private long thuNhapChiuThue;
//        @Min(value = 0, message = "Giá trị không hợp lệ")
        @Column(name = "thu_nhap_duoc_mien_giam")
        private long thuNhapDuocMienGiam;
//        @Min(value = 0, message = "Giá trị không hợp lệ")
        @Column(name = "khau_tru_cho_ban_than")
        private long khauTruChoBanThan;
//        @Min(value = 0, message = "Giá trị không hợp lệ")
        @Column(name = "khau_tru_nguoi_phu_thuoc")
        private long khauTruNguoiPhuThuoc;
//        @Min(value = 0, message = "Giá trị không hợp lệ")
        @Column(name = "khau_tru_cho_tu_thien")
        private long khauTruChoTuThien;
//        @Min(value = 0, message = "Giá trị không hợp lệ")
        @Column(name = "khau_tru_cho_bao_hiem")
        private long khauTruChoBaoHiem;
        @Column(name = "cu_tru")
        private boolean cuTru = true;

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
