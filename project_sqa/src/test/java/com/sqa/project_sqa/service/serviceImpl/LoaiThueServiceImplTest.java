package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.LoaiThue;
import com.sqa.project_sqa.repositories.LoaiThueRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

public class LoaiThueServiceImplTest {

    @Mock
    LoaiThueRepository loaiThueRepository;

    @InjectMocks
    LoaiThueServiceImpl loaiThueServiceImpl;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() {
    }

    @Test
    public void testGetAllLoaiThue() {
        List<LoaiThue> expectedLoaiThueList = new ArrayList<>();
        LoaiThue loaiThueTienLuongCong = new LoaiThue();
        LoaiThue loaiThueChuyenNhuongBDS = new LoaiThue();
        LoaiThue loaiThueDauTuVon = new LoaiThue();
        LoaiThue loaiThueQuaTang = new LoaiThue();
        LoaiThue loaiThueNhuongQuyenThuongMai = new LoaiThue();
        LoaiThue loaiThueTrungThuong = new LoaiThue();
        LoaiThue loaiThueChuyenNhuongBanQuyen = new LoaiThue();

        loaiThueTienLuongCong.setId(1);
        loaiThueTienLuongCong.setName("Thuế tiền lương công");

        loaiThueChuyenNhuongBDS.setId(2);
        loaiThueChuyenNhuongBDS.setName("Thuế chuyển nhượng bất động sản");

        loaiThueDauTuVon.setId(3);
        loaiThueDauTuVon.setName("Thuế đầu tư vốn");

        loaiThueQuaTang.setId(4);
        loaiThueQuaTang.setName("Thuế quà tặng");

        loaiThueNhuongQuyenThuongMai.setId(5);
        loaiThueNhuongQuyenThuongMai.setName("Thuế nhượng quyền thương mại");

        loaiThueTrungThuong.setId(6);
        loaiThueTrungThuong.setName("Thuế trúng thưởng");

        loaiThueChuyenNhuongBanQuyen.setId(7);
        loaiThueChuyenNhuongBanQuyen.setName("Thuế chuyển nhượng bản quyền");

        expectedLoaiThueList.add(loaiThueTienLuongCong);
        expectedLoaiThueList.add(loaiThueChuyenNhuongBDS);
        expectedLoaiThueList.add(loaiThueDauTuVon);
        expectedLoaiThueList.add(loaiThueQuaTang);
        expectedLoaiThueList.add(loaiThueNhuongQuyenThuongMai);
        expectedLoaiThueList.add(loaiThueTrungThuong);
        expectedLoaiThueList.add(loaiThueChuyenNhuongBanQuyen);


        when(loaiThueRepository.findAll()).thenReturn(expectedLoaiThueList);

        List<LoaiThue> actualLoaiThueList = loaiThueServiceImpl.getAll();
        assertNotNull(actualLoaiThueList);
        assertFalse(actualLoaiThueList.isEmpty());
        assertEquals(expectedLoaiThueList, actualLoaiThueList);
    }

    @Test
    public void testGetById() {
        int loaiThueId = 1;
        LoaiThue expectedLoaiThue = new LoaiThue();
        expectedLoaiThue.setId(loaiThueId);
        expectedLoaiThue.setName("Thuế tiền lương công");

        when(loaiThueRepository.findById(loaiThueId)).thenReturn(Optional.of(expectedLoaiThue));

        Optional<LoaiThue> actualLoaiThue = loaiThueServiceImpl.getById(loaiThueId);

        assertTrue(actualLoaiThue.isPresent());
        assertEquals(expectedLoaiThue, actualLoaiThue.get());
    }

}
