import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from "@angular/core";


@Component(
    {
        selector: 'my-grid',
        templateUrl: './my-grid.component.html',
        styleUrls: ['./my-grid.component.css']
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
export class MyGridomponent implements OnInit {
    ngOnInit(): void {
        this.colSpan = this.columns.length + 1;
    }
    @Input() data: any[] = [];
    @Input() title: string;
    @Input() columns: string[] = [];
    colSpan: number;
 

    
}