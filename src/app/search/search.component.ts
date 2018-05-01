import { Component, OnInit } from '@angular/core';
import {SearchService} from '../services/search.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchString: string;
  public data: string;

  constructor(private searchService: SearchService, private router: Router) { }

  ngOnInit() {
  }

  public search(): void {
    this.searchService.search('q=' + this.searchString.replace(' ', '+'));
  }

}
