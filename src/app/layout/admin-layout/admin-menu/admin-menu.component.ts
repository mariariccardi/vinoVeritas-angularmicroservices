import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  isUserCollapsed = false;
  isArticleCollapsed = false;
  isCompanyCollapsed = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  userscollapse() {
    if (this.isUserCollapsed === false) {
      this.isUserCollapsed = true;
    } else { this.isUserCollapsed = false; }
  }

  articlescollapse() {
    if (this.isArticleCollapsed === false) {
      this.isArticleCollapsed = true;
    } else { this.isArticleCollapsed = false; }
  }

  companiescollapse() {
    if (this.isCompanyCollapsed === false) {
      this.isCompanyCollapsed = true;
    } else { this.isCompanyCollapsed = false; }
  }

}

