import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookMinComponent } from './book-min/book-min.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchComponent } from './search/search.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchService} from './services/search.service';


const appRoutes: Routes = [
  { path: '', component: BookTableComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: '**', redirectTo: '/'}
  ];

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
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
