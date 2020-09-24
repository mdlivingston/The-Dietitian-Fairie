import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { SegmentedBar, SegmentedBarItem, TextField } from '@nativescript/core';
import { Page } from '@nativescript/core/ui/page';
import { DataService } from '../services/data.service';


@Component({
    selector: 'ns-penn-b',
    templateUrl: './penn-b.component.html',
    styleUrls: ['./penn-b.component.css']
})
export class PennBComponent implements OnInit
{
    height: number;
    weight: number;
    age: number;
    liters: number;
    tmax: number;
    rmr: number = 0;
    rmrFemale: number = 0;

    @ViewChild('factorField', { static: false }) factorField;
    @ViewChild('weightField', { static: false }) weightField;

    currentTabView = "standard";
    tabItems: Array<SegmentedBarItem> = [];


    constructor(
        public router: RouterExtensions,
        private dataService: DataService,
        private page: Page
    ) { }

    ngOnInit()
    {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Standard Units";
        this.tabItems.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Metric Units";

        this.tabItems.push(segmentedBarItem);

        setTimeout(() =>
        {
            let textField: TextField = this.weightField.nativeElement;
            textField.focus();
        }, 500);

    }
    onTabChange(args)
    {
        let segmentedBar = <SegmentedBar>args.object;
        segmentedBar.selectedIndex == 0
            ? (this.currentTabView = "standard")
            : (this.currentTabView = "metric");
    }
    onWeightChange(args)
    {
        let textField = <TextField>args.object;
        this.weight = Number(textField.text);
        this.calculatePennB();
    }
    onHeightChange(args)
    {
        let textField = <TextField>args.object;
        this.height = Number(textField.text);
        this.calculatePennB();
    }
    onAgeChange(args)
    {
        let textField = <TextField>args.object;
        this.age = Number(textField.text);
        this.calculatePennB();
    }
    onTempChange(args)
    {
        let textField = <TextField>args.object;
        this.tmax = Number(textField.text);
        this.calculatePennB();
    }
    onLiterChange(args)
    {
        let textField = <TextField>args.object;
        this.liters = Number(textField.text);
        this.calculatePennB();
    }


    calculatePennB()
    {
        if (this.age && this.weight && this.height && this.liters && this.tmax)
        {
            if (this.currentTabView == "standard")
            {
                this.rmrFemale = this.dataService.mifflin(
                    this.weight * 0.45359237,
                    this.height * 2.54,
                    this.age,
                    0
                );
                this.rmr = this.dataService.mifflin(
                    this.weight * 0.45359237,
                    this.height * 2.54,
                    this.age,
                    1
                );

            } else
            {
                this.rmrFemale = this.dataService.mifflin(
                    this.weight,
                    this.height,
                    this.age,
                    0
                );
                this.rmr = this.dataService.mifflin(
                    this.weight,
                    this.height,
                    this.age,
                    1
                );

            }
            const tempUnit = this.currentTabView == 'standard' ? (Number(this.tmax) - 32) / 1.8 : this.tmax;
            console.log(tempUnit);
            console.log(this.liters);
            this.rmr = this.dataService.pennB(this.rmr, tempUnit, this.liters);
            this.rmrFemale = this.dataService.pennB(this.rmrFemale, tempUnit, this.liters);
        }

        // this.rmr *= this.selectedFactor;

        // if (this.selectedFeverFactor > 98.6) {
        //     this.rmr *= ((this.selectedFeverFactor - 98.6) * 1.07)

        // }


    }
}
