import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyGridomponent } from './grid/my-grid.component';
import { CategoryListComponent } from './inventory/category/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    MyGridomponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
