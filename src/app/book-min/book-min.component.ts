import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-min',
  templateUrl: './book-min.component.html',
  styleUrls: ['./book-min.component.css']
})
export class BookMinComponent implements OnInit {
  @Input() img;
  @Input() title;
  @Input() author;
  @Input() firstPublished;

  constructor() { }

  ngOnInit() {
  }

}
