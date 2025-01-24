import { Component, EventEmitter, Input, Output, output } from '@angular/core';

import { Character } from '../../interfaces/Character';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
})
export class ListComponent {

  @Input() list: Character[] = [];

  @Output()
  onCharacterDelete: EventEmitter<string> = new EventEmitter();

  onDelete(id: string): void {
    this.onCharacterDelete.emit(id);
  }
}
