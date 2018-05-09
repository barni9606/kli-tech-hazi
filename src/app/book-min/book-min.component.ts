import {Component, Input, OnInit} from '@angular/core';
import {BookDetailService} from '../services/book-detail.service';
import {Router} from '@angular/router';

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
  @Input() key: string;

  constructor(private bookDetailService: BookDetailService, private router: Router) { }

  ngOnInit() {
  }

  navigateToDetails() {
    this.bookDetailService.getWork(this.key);
    this.router.navigate(['/book-detail']);
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
