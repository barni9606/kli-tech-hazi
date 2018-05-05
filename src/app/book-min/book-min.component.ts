import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-min',
  templateUrl: './book-min.component.html',
  styleUrls: ['./book-min.component.css']
})
export class BookMinComponent implements OnInit {
  @Input() img = '';
  @Input() title: string;
  @Input() author: string;
  @Input() firstPublished;

  constructor() { }

  ngOnInit() {
  }

  smallImageUrl(): string {
    return this.image('S');
  }

  largeImageUrl(): string {
    return this.image('L');
  }

  private image(size: string): string {
    if (this.img) {
      return 'http://covers.openlibrary.org/b/id/' + this.img + '-' + size + '.jpg';
    } else {
      return 'assets/placeholder.png';
    }
  }

}
