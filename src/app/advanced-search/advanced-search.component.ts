import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  public options = [
    {label: 'Title', query: 'title', variable: ''},
    {label: 'Author', query: 'author', variable: ''},
    {label: 'ISBN', query: 'isbn', variable: ''},
    {label: 'Subject', query: 'subject', variable: ''},
    {label: 'Place', query: 'place', variable: ''},
    {label: 'Person', query: 'person', variable: ''},
    {label: 'Publisher', query: 'publisher', variable: ''}
  ];
  public loading = false;

  constructor(private searchService: SearchService, private router: Router) {
    searchService.booksObservable.subscribe(data => {
      this.loading = false;
    });
  }

  private static formatString(query: string, variable: string): string {
    if (variable && variable !== '') {
      return query + '=' + variable.replace(' ', '+') + '&';
    } else {
      return '';
    }
  }

  ngOnInit() {
  }

  public search(): void {
    let searchString = '';
    for (const option of this.options) {
      searchString += AdvancedSearchComponent.formatString(option.query, option.variable);
    }
    if (searchString.length >= 1) {
      searchString = searchString.substring(0, searchString.length - 1);
      this.loading = true;
      this.searchService.search(searchString);
    }
  }

}
