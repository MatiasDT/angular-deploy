import { Injectable } from '@angular/core';

import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/Character';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 8000
    },
    {
      id: uuid(),
      name: 'Gohan',
      power: 7000
    }
  ];

  addCharacter(character: Character): void {
    const newCharacter = { ...character, id: uuid() };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
