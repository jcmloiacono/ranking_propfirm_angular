import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavbarOpen = false;
  currentRoute: string  = '';

  constructor(private router: Router) {

  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
}



