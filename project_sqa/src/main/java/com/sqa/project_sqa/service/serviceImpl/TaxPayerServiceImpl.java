package com.sqa.project_sqa.service.serviceImpl;

import com.sqa.project_sqa.entities.TaxPayer;
import com.sqa.project_sqa.repositories.TaxpayerRepo;
import com.sqa.project_sqa.service.TaxPayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Controller
@Service
public class TaxPayerServiceImpl implements TaxPayerService {
    @Autowired
    private TaxpayerRepo taxpayerRepo;
    @Override
    public List<TaxPayer> getAll() {
        return taxpayerRepo.findAll();
    }

    @Override
    public TaxPayer getTaxPayerById(String mst) {
       TaxPayer taxPayer =taxpayerRepo.findByMst(mst);
        if(taxPayer == null) {
                System.out.println("taxpayer not found");
        }
       return taxPayer;

    }
}
