import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchString: string;
  public loading = false;

  constructor(private searchService: SearchService, private router: Router) {
    searchService.booksObservable.subscribe(data => {
      this.loading = false;
    });
  }

  ngOnInit() {
  }

  public search(): void {
    if (this.searchString) {
      this.loading = true;
      this.searchService.search('q=' + this.searchString.replace(' ', '+'));
    }
  }

}
