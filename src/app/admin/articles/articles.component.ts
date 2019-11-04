import { Component, OnInit } from '@angular/core';
import { ArticleDTO } from 'src/dto/articledto';
import { ArticleService } from 'src/service/article.service';
import { CompanyDTO } from 'src/dto/companydto';
import { CompanyService } from 'src/service/company.service';
import { UserService } from '../../../service/user.service';
import { UserDTO } from 'src/dto/userdto';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

    articles: ArticleDTO [];
    articlesOld: ArticleDTO [];
    companies: CompanyDTO[];
    users: UserDTO [];
    articleToSearch: ArticleDTO;
    articleToInsert: ArticleDTO;


  constructor(private service: ArticleService, private companyService: CompanyService, private userService: UserService) {
    this.articleToInsert = new ArticleDTO ();
    this.articleToInsert.company = new CompanyDTO ();
    this.articleToInsert.user = new UserDTO ();
    this.articleToSearch = new ArticleDTO ();
    this.articleToSearch.company = new CompanyDTO ();
    this.articleToSearch.user = new UserDTO ();
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.service.getAll().subscribe (articles => this.articles = this.articlesOld = articles);
    this.companyService.getAll().subscribe (companies => this.companies  = companies);
    this.userService.getAll().subscribe (users => this.users = users);
  }

  update(article: ArticleDTO) {
    this.service.update(article).subscribe(() => this.getArticles());
  }

  delete(article: ArticleDTO){
    this.service.delete(article.id).subscribe(() => this.getArticles());
  }

  insert (article: ArticleDTO){
    this.service.insert(article).subscribe(() => this.getArticles());
    this.clear();
  }
  
  clear() {
    this.articleToInsert = new ArticleDTO();
    this.articleToInsert.company = new CompanyDTO ();
    this.articleToInsert.user = new UserDTO ();
  }

  search(){
    this.articles = [];
    this.articlesOld.forEach(a => {
      if ((!this.articleToSearch.name || a.name.toLowerCase().includes(this.articleToSearch.name.toLowerCase()))
      && (!this.articleToSearch.company.id || a.company.id == this.articleToSearch.company.id)) {
        this.articles.push(a);
      }
    });
  }

  clearSearch(){
    this.articleToSearch = new ArticleDTO ();
    this.articleToSearch.company = new CompanyDTO ();
    this.articleToSearch.user = new UserDTO ();
    this.articles = this.articlesOld;
   
  }
}
