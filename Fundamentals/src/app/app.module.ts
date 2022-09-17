import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CategoryListComponent} from './products/category-list/category-list.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
