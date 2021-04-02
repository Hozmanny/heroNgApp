import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../interface/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
    mat-card {
      margin-top: 20px;
    }
    `
  ]
})
export class HeroCardComponent implements OnInit {
  @Input() heroz!: Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
