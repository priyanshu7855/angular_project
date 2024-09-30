import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  activePage = 'dashboard';

  constructor(private router: Router) {}

  navigate(page: string) {
    this.activePage = page;
    this.router.navigate([`/${page}`]);
  }
}
