import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  heroForm!: Hero;
  powers = ['Chemistry', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  ngOnInit(): void {
    this.heroForm = {
      id: 0,
      name: '',
      power: '',
      alterEgo: '',
    }
  }

  onSubmit() {
    console.log(this.heroForm)
  }
}
