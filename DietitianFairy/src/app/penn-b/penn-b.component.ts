import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ns-penn-b',
    templateUrl: './penn-b.component.html',
    styleUrls: ['./penn-b.component.css']
})
export class PennBComponent implements OnInit {

    constructor(public router: RouterExtensions,
        private dataService: DataService) { }


    ngOnInit() {
    }

}
