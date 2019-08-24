import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ns-penn',
    templateUrl: './penn.component.html',
    styleUrls: ['./penn.component.css']
})
export class PennComponent implements OnInit {

    constructor(public router: RouterExtensions,
        private dataService: DataService) { }

    ngOnInit() {
    }

}
