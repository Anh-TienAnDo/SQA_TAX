package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.NguoiDongThue;
import com.sqa.project_sqa.payload.dto.NguoiDongThueDTO;
import org.springframework.http.ResponseEntity;

public interface NguoiDongThueService {
    ResponseEntity<?> registerTaxCode(NguoiDongThueDTO nguoiDongThueDTO);

}
