import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookDetailService {
  private api = 'https://openlibrary.org';
  private bookDetails = new BehaviorSubject(null);
  private authors = new BehaviorSubject(null);
  public bookDetailsObservable = this.bookDetails.asObservable();
  public authorsObservable = this.authors.asObservable();

  constructor(private httpClient: HttpClient) { }

  // gets the details of a book (work)
  getWork(work: string) {
    const headers = {accept: 'application/json'};
    this.httpClient.get(this.api + work + '.json').subscribe((data) => {
      this.bookDetails.next(data);
    });
  }

  // gets the details of authors
  getAuthors(authors: string[]) {
    const headers = {accept: 'application/json'};
    const authorDetails: object[] = [];
    for (const author of authors) {
      this.httpClient.get(this.api + author + '.json').subscribe((data) => {
        authorDetails.splice(authorDetails.length, 0, data);
      });
    }
    this.authors.next(authorDetails);
  }

}
