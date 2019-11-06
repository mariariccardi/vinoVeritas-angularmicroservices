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
    articleToSearch: ArticleDTO = new ArticleDTO();
    articleToInsert: ArticleDTO = new ArticleDTO ();


  constructor(private service: ArticleService, private companyService: CompanyService) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.service.getAll().subscribe (articles => this.articles = this.articlesOld = articles);
    this.companyService.getAll().subscribe (companies => this.companies  = companies);
  }

  update(article: ArticleDTO) {
    this.service.update(article).subscribe(() => this.getArticles());
  }

  delete(article: ArticleDTO){
    this.service.delete(article.id).subscribe(() => this.getArticles());
  }

  insert (article: ArticleDTO){
    this.service.insert(article).subscribe(() => this.getArticles());
    this.clear(article);
  }
  
  clear(article) {
    this.articleToInsert = new ArticleDTO();
  }

  search(){
    this.articles = [];
    this.articlesOld.forEach(a => {
      if ((!this.articleToSearch.name || a.name.toLowerCase().includes(this.articleToSearch.name.toLowerCase()))
      && (!this.articleToSearch.companyId || a.companyId == this.articleToSearch.companyId)) {
        this.articles.push(a);
      }
    });
  }

  clearSearch(){
    this.articleToSearch = new ArticleDTO ();
    this.articles = this.articlesOld;
   
  }
}
