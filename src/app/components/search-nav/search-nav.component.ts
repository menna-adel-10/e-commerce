import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-nav.component.html',
})
export class SearchNavComponent {

    isNavBarHidden: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Here you can define the logic to hide the navigation bar when scrolling
    this.isNavBarHidden = window.scrollY > 0; // You can adjust the threshold value as per your requirement
  }
}
