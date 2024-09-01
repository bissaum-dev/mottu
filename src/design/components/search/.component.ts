import { Pages } from '@/app/.types';
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'ui-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './.html',
  styleUrl: './.scss'
})
export class SearchComponent {
  @Input() label = 'Search';
  @Output() inputSearch = new EventEmitter();

  showSearch = false
  private searchSubject = new Subject();

  constructor(private router: Router) {
    this.searchSubject.pipe(debounceTime(500)).subscribe(value => {
      this.inputSearch.emit(value);
    });
  }

  ngOnInit() {
    const currentUrl = this.router.url as Pages

    if (currentUrl === '/home') {
      this.showSearch = true
    }
  }

  onInput(value: string) {
    this.searchSubject.next(value);
  }
}
