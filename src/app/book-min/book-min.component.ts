import {Component, Input, OnInit} from '@angular/core';
import {BookDetailService} from '../services/book-detail.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-min',
  templateUrl: './book-min.component.html',
  styleUrls: ['./book-min.component.css']
})
export class BookMinComponent {
  @Input() img = '';
  @Input() title: string;
  @Input() author: string;
  @Input() firstPublished;
  @Input() key: string;

  constructor(private bookDetailService: BookDetailService, private router: Router) { }

  // when a user selects a book this function loads it, and navigates to its detail page
  navigateToDetails() {
    this.bookDetailService.getWork(this.key);
    this.router.navigate(['/book-detail']);
  }

  // returns the small variant of the cover image
  smallImageUrl(): string {
    return this.image('S');
  }

  // returns the large variant of the cover image
  largeImageUrl(): string {
    return this.image('L');
  }

  // helper for cover image URL
  private image(size: string): string {
    if (this.img) {
      return 'http://covers.openlibrary.org/b/id/' + this.img + '-' + size + '.jpg';
    } else {
      return 'assets/placeholder.png';
    }
  }

}
