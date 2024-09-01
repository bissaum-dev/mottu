import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ui-search',
  standalone: true,
  imports: [],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class SearchComponent {
  @Input() label = 'Search';
  @Output() inputSearch = new EventEmitter();

  private searchSubject = new Subject();

  constructor() {
    this.searchSubject.pipe(debounceTime(500)).subscribe(value => {
      this.inputSearch.emit(value);
    });
  }

  onInput(value: string) {
    this.searchSubject.next(value);
  }
}
