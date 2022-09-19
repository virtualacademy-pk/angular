import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.data = [{
      Id: 1,
      Name: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales"
  },
  {
      Id: 2,
      Name: "Condiments",
      Description: "Sweet and savory sauces, relishes, spreads, and seasonings"
  },
  {
      Id: 4,
      Name: "Confections",
      Description: "Desserts, candies, and sweet breads"
  }];
  this.stdData = [{
    studentId: 1,
    studentName: 'Imran'
  },
  {
    studentId: 2,
    studentName: 'Shahid'
  }]
  }
  title = 'Category List';
  show: boolean = true;
  column: string[] = ['Id', 'Name', 'Description'];

  stdCol: string[] = ['studentId', 'studentName'];
  stdData: any[] = [];
  data: any[] = [];
  

  action(payload: string): void {
    if (payload === 'show') {
      this.show = true;
    } else {
      this.show = false;
    }
  }

}
