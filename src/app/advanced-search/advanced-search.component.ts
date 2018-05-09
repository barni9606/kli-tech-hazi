import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SearchService} from '../services/search.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
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
  }

  // helper for search query
  private static formatString(query: string, variable: string): string {
    if (variable && variable !== '') {
      return query + '=' + variable.replace(' ', '+') + '&';
    } else {
      return '';
    }
  }

  // init: subscribe for searchService
  ngOnInit() {
    this.subscription = this.searchService.booksObservable.subscribe(data => {
      this.loading = false;
    });
  }

  // destroy: unsubscribe for searchService
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // search for books
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
