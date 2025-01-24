import { Component } from '@angular/core';

import { Character } from '../../interfaces/Character';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) { }

  get characters() {
    return this.dbzService.characters;
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }

  onCharacterDelete(id: string) {
    this.dbzService.deleteCharacterById(id);
  }
}
