import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html'
})
export class CounterComponent {

  initCounter: number = 10;
  counter: number = this.initCounter;

  decrement(): void {
    this.counter--;
  }

  resetCounter() {
    this.counter = this.initCounter;
  }

  increment(): void {
    this.counter++;
  }
}
