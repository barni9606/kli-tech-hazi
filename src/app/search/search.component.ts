import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public searchString: string;
  public loading = false;

  constructor(private searchService: SearchService, private router: Router) {
  }

  // init: subscribe for books
  ngOnInit() {
    this.subscription = this.searchService.booksObservable.subscribe(data => {
      this.loading = false;
    });
  }

  // init: unsubscribe for books
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // search for books with the query the user given
  public search(): void {
    if (this.searchString) {
      this.loading = true;
      this.searchService.search('q=' + this.searchString.replace(' ', '+'));
    }
  }

}
