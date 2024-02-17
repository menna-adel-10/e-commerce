import { Component } from '@angular/core';
import { SearchNavComponent } from '../components/search-nav/search-nav.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HomeComponent } from '../pages/home/home.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SearchNavComponent, SidebarComponent, HomeComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout.component.html'
})
export class LayoutComponent {

}
