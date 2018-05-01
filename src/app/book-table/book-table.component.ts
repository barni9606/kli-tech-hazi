import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {

  public books = [];

  constructor(private searchService: SearchService) {
    searchService.booksObservable.subscribe((data) => {
      if (data != null) {
        this.books = data.docs;
      }
    });
  }

  ngOnInit() {
  }

}
