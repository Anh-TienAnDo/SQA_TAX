package com.sqa.project_sqa.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;
@Entity
public class TaxPayer {
    @Id
    private String mst;

    private String fullName;

    private Date dateOfBirth;

    private String phoneNumber;

    private String taxAgency;


    @OneToOne
    private PersonalDocuments personalDocuments;

    @OneToOne
    private ResidentialAddress residentialAddress;

    @OneToOne
    private CurrentAddress currentAddress;
}
