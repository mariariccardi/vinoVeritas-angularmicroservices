import { Injectable } from "@angular/core";
import { AbstractService } from './abstractservice';
import { ArticleDTO } from 'src/dto/articledto';
import { HttpClient } from '@angular/common/http';

@Injectable ({
    providedIn : 'root'
})

export class ArticleService extends AbstractService<ArticleDTO>{
    constructor(http: HttpClient) {
      super(http);
      this.type = 'article';
}
}
