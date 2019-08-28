import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { DataService } from '../services/data.service';
import { SegmentedBarItem, SegmentedBar } from 'tns-core-modules/ui/segmented-bar/segmented-bar';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: 'ns-penn-b',
    templateUrl: './penn-b.component.html',
    styleUrls: ['./penn-b.component.css']
})
export class PennBComponent implements OnInit {
    height: number;
    weight: number;
    age: number;
    liters: number;
    tmax: number;
    rmr: number = 0;

    @ViewChild('factorField', { static: false }) factorField;
    @ViewChild('weightField', { static: false }) weightField;

    currentTabView = "standard";
    tabItems: Array<SegmentedBarItem> = [];


    constructor(
        public router: RouterExtensions,
        private dataService: DataService,
        private page: Page
    ) { }

    ngOnInit() {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Standard Units";
        this.tabItems.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Metric Units";

        this.tabItems.push(segmentedBarItem);

        setTimeout(() => {
            let textField: TextField = this.weightField.nativeElement;
            textField.focus();
        }, 500);

    }
    onTabChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        segmentedBar.selectedIndex == 0
            ? (this.currentTabView = "standard")
            : (this.currentTabView = "metric");
    }
    onWeightChange(args) {
        let textField = <TextField>args.object;
        this.weight = Number(textField.text);
        this.calculatePennB();
    }
    onHeightChange(args) {
        let textField = <TextField>args.object;
        this.height = Number(textField.text);
        this.calculatePennB();
    }
    onAgeChange(args) {
        let textField = <TextField>args.object;
        this.age = Number(textField.text);
        this.calculatePennB();
    }
    onTempChange(args) {
        let textField = <TextField>args.object;
        this.tmax = Number(textField.text);
        this.calculatePennB();
    }
    onLiterChange(args) {
        let textField = <TextField>args.object;
        this.liters = Number(textField.text);
        this.calculatePennB();
    }


    calculatePennB() {
        if (this.age && this.weight && this.height && this.liters && this.tmax) {
            if (this.currentTabView == "standard") {
                this.rmr = this.dataService.mifflin(
                    this.weight,
                    this.height,
                    this.age,
                    1
                );

            } else {
                this.rmr = this.dataService.mifflin(
                    this.weight * 2.2,
                    this.height * 2.54,
                    this.age,
                    1
                );

            }
            this.rmr = this.dataService.pennB(this.rmr, this.tmax, this.liters);
        }

        // this.rmr *= this.selectedFactor;

        // if (this.selectedFeverFactor > 98.6) {
        //     this.rmr *= ((this.selectedFeverFactor - 98.6) * 1.07)

        // }


    }
}
