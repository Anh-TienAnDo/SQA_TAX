package com.sqa.project_sqa.service;

import com.sqa.project_sqa.entities.TaxPayer;

import java.util.List;

public interface TaxPayerService {
    List<TaxPayer> getAll();
    TaxPayer getTaxPayerById(String mst);
}
