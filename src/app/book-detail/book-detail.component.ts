import {Component, OnDestroy, OnInit} from '@angular/core';
import {BookDetailService} from '../services/book-detail.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  private bookDetailsSubscription: Subscription;
  private authorsSubscription: Subscription;
  public title: string;
  public subtitle: string;
  public published: number;
  public covers: number[];
  private coverIndex = 0;
  public description: string;
  public authors: object[];
  public subjects: string[];
  public subjectTimes: string[];
  public subjectPeople: string[];
  public subjectPlaces: string[];


  constructor(private bookDetailService: BookDetailService) {
  }

  // init: subscribe for book details and author details
  ngOnInit() {
    this.bookDetailsSubscription = this.bookDetailService.bookDetailsObservable.subscribe((data) => {
      if (data) {
        this.title = data.title;
        if (data.description) {
          if (typeof data.description === 'string') {
            this.description = data.description;
          } else {
            this.description = data.description.value;
          }
        }
        this.published = data.first_publish_year;
        this.covers = data.covers || [];
        this.subtitle = data.subtitle;
        this.subjects = data.subjects;
        this.subjectTimes = data.subject_times;
        this.subjectPeople = data.subject_people;
        this.subjectPlaces = data.subject_places;
        if (data.authors) {
          const authorKeys: string[] = [];
          for (const author of data.authors) {
            if (author.type.key === '/type/author_role') {
              authorKeys.splice(authorKeys.length, 0, author.author.key);
            }
          }
          this.bookDetailService.getAuthors(authorKeys);
        }
      }
    });
    this.authorsSubscription = this.bookDetailService.authorsObservable.subscribe((authors) => {
      if (authors) {
        this.authors = authors;
      }
    });
  }

  // destroy: unsubscribe for book details and author details
  ngOnDestroy(): void {
    this.bookDetailsSubscription.unsubscribe();
    this.authorsSubscription.unsubscribe();
  }

  // selects next image if possible
  nextImage() {
    if (this.covers && this.coverIndex < this.covers.length - 1) {
      this.coverIndex++;
    }
  }

  // selects previous image if possible
  previousImage() {
    if (this.covers && this.coverIndex > 0) {
      this.coverIndex--;
    }
  }

  // returns the medium variant of the cover image
  mediumImageUrl(): string {
    return this.image('M');
  }

  // returns the large variant of the cover image
  largeImageUrl(): string {
    return this.image('L');
  }

  // helper for cover image URL
  private image(size: string): string {
    if (this.covers && this.covers.length > 0) {
      return 'http://covers.openlibrary.org/b/id/' + this.covers[this.coverIndex] + '-' + size + '.jpg';
    } else {
      return 'assets/placeholder.png';
    }
  }

}
