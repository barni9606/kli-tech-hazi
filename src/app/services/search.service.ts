import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {
  private api = 'https://openlibrary.org/search.json?';
  private books = new BehaviorSubject(null);
  public booksObservable = this.books.asObservable();

  constructor(private httpClient: HttpClient) { }

  public search(searchString: string) {
    const headers = {accept: 'application/json'};
    this.httpClient.get(this.api + searchString).subscribe((data) => {
      this.books.next(data);
    });
  }


}
