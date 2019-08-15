import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ns-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

    constructor(public router: RouterExtensions) { }

    ngOnInit() {
    }

}
