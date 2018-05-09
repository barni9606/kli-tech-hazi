import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchService} from '../services/search.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit, OnDestroy {

  private booksSubscription: Subscription;
  public books = [];
  public maxPages: number;
  public currentPage: number;

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {

    this.booksSubscription = this.searchService.booksObservable.subscribe((data) => {
      if (data != null) {
        this.books = data.docs;
        this.currentPage = this.searchService.getCurrentPage();
        this.maxPages = this.searchService.getMaxPages();
      }
    });
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

  public nextPage() {
    this.searchService.nextPage();
  }

  public previousPage() {
    this.searchService.previousPage();
  }

}
