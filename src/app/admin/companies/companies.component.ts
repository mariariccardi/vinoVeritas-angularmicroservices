import { Component, OnInit } from '@angular/core';
import { CompanyDTO } from 'src/dto/companydto';
import { CompanyService } from 'src/service/company.service';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    companies: CompanyDTO[];
    companiesOld: CompanyDTO[];
    companytoinsert: CompanyDTO;
    companytosearch: CompanyDTO;
   

   
    

  constructor(private service: CompanyService) {}
   

  ngOnInit() {

    this.getCompanies();
    }
    
    getCompanies(){
        this.service.getAll().subscribe(companies => {this.companies = this.companiesOld = companies;});
    }

    delete(company: CompanyDTO){
        this.service.delete(company.id).subscribe(() => this.getCompanies());
    }
    update(company: CompanyDTO){
        this.service.update(company).subscribe(() => this.getCompanies());
    }
    insert(){
        this.service.insert(this.companytoinsert).subscribe(() => this.getCompanies());
        this.clear();
    }
    clear(){
        this.companytoinsert = new CompanyDTO();
    }
    search() {
        this.companies = [];
        this.companiesOld.forEach(c => {
            if ((!this.companytosearch.name || c.name.toLowerCase().includes(this.companytosearch.name.toLowerCase())) 
                && (!this.companytosearch.address || c.address.toLowerCase().includes(this.companytosearch.address.toLowerCase()))
                && (!this.companytosearch.city || c.city.toLowerCase().includes(this.companytosearch.city.toLowerCase()))) {
            this.companies.push(c);
        }
        });
    }
    clearSearch() {
        this.companytosearch = new CompanyDTO();
        this.companies = this.companiesOld;
    }
    }
    