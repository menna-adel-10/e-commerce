import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {

  isNavbarFixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onScroll() {
    if (window.scrollY > 1) {
      this.isNavbarFixed = true;
    } else {
      this.isNavbarFixed = false;
    }
  }
}
