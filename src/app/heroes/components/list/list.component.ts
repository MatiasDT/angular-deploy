import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html'
})
export class ListComponent {

  heroes = ['Bombasto', 'Magneto', 'Beast', 'Storm'];
  heroeDeleted: string = '';

  addHero(newHero: string): void {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

  removeHero(): void {
    this.heroeDeleted = this.heroes.pop() || '';
  }
}
