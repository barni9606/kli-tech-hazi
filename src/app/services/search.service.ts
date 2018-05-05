import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {
  private api = 'https://openlibrary.org/search.json?';
  private books = new BehaviorSubject(null);
  private searchString: string;
  private limit: number;
  private page: number;
  private maxPages: number;
  public booksObservable = this.books.asObservable();

  constructor(private httpClient: HttpClient) {
    this.booksObservable.subscribe(data => {
      if (data && this.limit) {
        this.maxPages = Math.ceil(data.num_found / this.limit);
      }
    });
  }

  public search(searchString: string) {
    const headers = {accept: 'application/json'};
    this.searchString = searchString;
    this.limit = 10;
    this.page = 1;
    this.searchApi();
  }

  public nextPage() {
    if (this.page < this.maxPages) {
      this.page += 1;
      this.searchApi();
    }
  }

  public previousPage() {
    if (this.page > 1) {
      this.page -= 1;
      this.searchApi();
    }
  }

  private searchApi() {
    if (this.searchString && this.page && this.limit) {
      this.httpClient.get(this.api + this.searchString + '&limit=' + this.limit + '&page=' + this.page).subscribe((data) => {
        this.books.next(data);
      });
    }
  }


  public getCurrentPage(): number {
    return this.page;
  }

  public getMaxPages(): number {
    return this.maxPages;
  }
}
