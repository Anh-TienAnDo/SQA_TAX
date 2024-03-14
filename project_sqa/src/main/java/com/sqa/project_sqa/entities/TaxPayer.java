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

