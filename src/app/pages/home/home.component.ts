import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, NavbarComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
