import { Component, EventEmitter, Output } from '@angular/core';

import { Character } from '../../interfaces/Character';

@Component({
  selector: 'dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = {
    id: '',
    name: '',
    power: 0
  }

  emitCharacter() {
    const character = { ...this.character };
    this.onNewCharacter.emit(character);

    this.character = { id: '', name: '', power: 0 };
  }
}
