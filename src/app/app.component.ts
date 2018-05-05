import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public navLinks = [
    {path: '/simple-search', label: 'Simple search'},
    {path: '/advanced-search', label: 'Advanced Search'},
    {path: '/book-detail', label: 'Book details'}
  ];
}
