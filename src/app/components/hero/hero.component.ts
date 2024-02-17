import { Component } from '@angular/core';
import { NewProducts } from '../../../assets/data/products';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  new = NewProducts;
}
