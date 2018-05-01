import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookMinComponent } from './book-min/book-min.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    BookMinComponent,
    BookTableComponent,
    BookDetailComponent,
    AdvancedSearchComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
