import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BookMinComponent } from './book-min/book-min.component';
import { BookTableComponent } from './book-table/book-table.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchComponent } from './search/search.component';
import {
  MatButtonModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule,
  MatSelectModule, MatTabsModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SearchService} from './services/search.service';
import {BookDetailService} from './services/book-detail.service';


const appRoutes: Routes = [
  { path: 'simple-search', component: SearchComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: 'book-detail', component: BookDetailComponent },
  { path: '**', redirectTo: '/simple-search'}
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
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [
    SearchService,
    BookDetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
