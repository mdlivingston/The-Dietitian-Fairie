import { Page } from 'tns-core-modules/ui/page/page';
import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
@Component({
    selector: 'ns-references',
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {
    private _selectDateGridLayout: GridLayout;
    private _overlayGridLayout: GridLayout;
    constructor(public router: RouterExtensions, private page: Page) { }

    ngOnInit() {
        this._selectDateGridLayout = this.page.getViewById('selectDateGridLayout');
        this._overlayGridLayout = this.page.getViewById('overlayGridLayout');
    }
    openModal(type) {
        switch (type) {
            case 'bmi':
                this._overlayGridLayout.animate({ opacity: 0.5, duration: 300 });
                this._selectDateGridLayout.animate({ opacity: 1, duration: 400 });
                break;

            default:
                break;
        }
    }
    calculateBMI() {
        // let heightInInches = (this.bmi.HeightFt * 12) + this.bmi.HeightIn;
        // this.bmi.BMI = (703 * this.bmi.Weight) / (heightInInches * heightInInches);
        // this.saveBMI();
    }
}
