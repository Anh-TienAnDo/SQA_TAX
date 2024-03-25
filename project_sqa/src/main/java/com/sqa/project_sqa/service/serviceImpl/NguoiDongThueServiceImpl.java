package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.NguoiDongThue;
import com.sqa.project_sqa.payload.dto.NguoiDongThueDTO;
import com.sqa.project_sqa.repositories.NguoiDongThueRepository;
import com.sqa.project_sqa.service.NguoiDongThueService;
import com.sqa.project_sqa.utils.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Random;

@Service
public class NguoiDongThueServiceImpl implements NguoiDongThueService {
    @Autowired
    private NguoiDongThueRepository nguoiDongThueRepository;
    @Override
    public ResponseEntity<?> registerTaxCode(NguoiDongThueDTO nguoiDongThueDTO) {
        NguoiDongThue nguoiDongThue = new NguoiDongThue();
        if(nguoiDongThueRepository.existsByEmail(nguoiDongThueDTO.getEmail())){

//            return new ResponseEntity<>("Email đã được đăng kí.", HttpStatus.BAD_REQUEST);
            return ResponseUtil.getResponseEntity("01", "Email đã được đăng kí.",HttpStatus.BAD_REQUEST);
        }
        if(nguoiDongThueRepository.existsBySdt(nguoiDongThueDTO.getSdt())){
            return ResponseUtil.getResponseEntity("02", "Số điện thoại đã được đăng kí.",HttpStatus.BAD_REQUEST);
        }
        if(nguoiDongThueDTO.getLoaiGiayTo().equals("cccd")){
            if(nguoiDongThueRepository.existsByCCCD(nguoiDongThueDTO.getSoGiayTo())){
                return ResponseUtil.getResponseEntity("03", "Số CCCD đã được đăng kí MST.",HttpStatus.BAD_REQUEST);
            }
        }else {
            if(nguoiDongThueRepository.existsByCMND(nguoiDongThueDTO.getSoGiayTo())){
                return ResponseUtil.getResponseEntity("04", "Số CMND đã được đăng kí MST.",HttpStatus.BAD_REQUEST);
            }
        }



        nguoiDongThue.setHoVaTen(nguoiDongThueDTO.getHoVaTen());
        nguoiDongThue.setGioiTinh(nguoiDongThueDTO.getGioiTinh());
        nguoiDongThue.setNgaySinh(nguoiDongThueDTO.getNgaySinh());
        nguoiDongThue.setSdt(nguoiDongThueDTO.getSdt());
        nguoiDongThue.setEmail(nguoiDongThueDTO.getEmail());

        if(nguoiDongThueDTO.getLoaiGiayTo().equals("cccd")){
            nguoiDongThue.setCCCD(nguoiDongThueDTO.getSoGiayTo());
            nguoiDongThue.setCCCD_ngayCap(nguoiDongThueDTO.getNgayCap());
            nguoiDongThue.setCCCD_noiCap(nguoiDongThueDTO.getNoiCap());
        }

        if(nguoiDongThueDTO.getLoaiGiayTo().equals("cmnd")){
            nguoiDongThue.setCMND(nguoiDongThueDTO.getSoGiayTo());
            nguoiDongThue.setCMND_ngayCap(nguoiDongThueDTO.getNgayCap());
            nguoiDongThue.setCMND_noiCap(nguoiDongThueDTO.getNoiCap());
        }

        nguoiDongThue.setDcct_QuanHuyen(nguoiDongThueDTO.getDcct_QuanHuyen());
        nguoiDongThue.setDcct_xaPhuong(nguoiDongThueDTO.getDcct_xaPhuong());
        nguoiDongThue.setDcct_tinhThanhPho(nguoiDongThueDTO.getDcct_tinhThanhPho());
        nguoiDongThue.setDcct_soNhaDuongXom(nguoiDongThueDTO.getDcct_soNhaDuongXom());

        nguoiDongThue.setDchk_QuanHuyen(nguoiDongThueDTO.getDchk_QuanHuyen());
        nguoiDongThue.setDchk_xaPhuong(nguoiDongThueDTO.getDchk_xaPhuong());
        nguoiDongThue.setDchk_tinhThanhPho(nguoiDongThueDTO.getDchk_tinhThanhPho());
        nguoiDongThue.setDchk_soNhaDuongXom(nguoiDongThueDTO.getDchk_soNhaDuongXom());

        nguoiDongThue.setTaxAgency(nguoiDongThueDTO.getTaxAgency());

        String mst;
        do{
            mst=generateRandomNumber();
        }while (!isUnique(mst));

        nguoiDongThue.setMst(mst);

        nguoiDongThueRepository.save(nguoiDongThue);


        return new ResponseEntity<>(mst,HttpStatus.OK);
    }

    private String generateRandomNumber() {
        Random random = new Random();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 11; i++) {
            sb.append(random.nextInt(10)); // Sinh một chữ số từ 0 đến 9
        }
        return sb.toString();
    }
    private boolean isUnique(String mst) {
        return !nguoiDongThueRepository.existsByMst(mst);
    }
}
