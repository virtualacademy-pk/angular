import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";
import { Category } from "./category";
import { CategoryListService } from "./category-list.service";

@Component(
    {
        selector: 'category-list',
        templateUrl: './category-list.component.html',
        styleUrls: ['./category-list.component.css']
    }
)
/*
OnInt
After View Initialization
On change
On Destroy
After content initialization
content created
*/
export class CategoryListComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private _data: Category[] = [];
    @Input() title: string;

    constructor(private service: CategoryListService) {
       
        
    }
    ngOnDestroy(): void {
       console.log("on Destroy");
    }
    ngOnChanges(changes: SimpleChanges): void {
        console.log("On Changes");
    }
    ngAfterViewInit(): void {
        console.log("After view Init");
    }
    ngOnInit(): void {
       this.data = this.service.getCategories();
    }
    
    set data(value: Category[]) {
        this._data = value;
    }
    
    get data(): Category[] {
        return this._data;
    }

    
}