import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name: string = 'windstorm';
  edad: number = 25;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene ${this.edad} años`;
  }

  // TODO: Implementar métodos para cambiar el nombre y la edad del héroe
  changeHero(): void {
    this.name = 'Batman';
  }

  changeAge(): void {
    this.edad = 30;
  }

  resetForm() {
    this.name = 'windstorm';
    this.edad = 25;
  }
}
