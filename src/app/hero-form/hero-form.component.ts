import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {
  powers = ['Chemistry', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  model = new Hero(21, 'Dr. Stone', this.powers[0], 'John Peter');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

}
