import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-rxjs',
  templateUrl: './input-rxjs.component.html',
  styleUrls: ['./input-rxjs.component.css'],
})
export class InputRxjsComponent implements OnInit {
  input = new FormControl('');
  output: string = '';

  constructor() {}

  ngOnInit(): void {
    this.input.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => (this.output = value));
  }
}
