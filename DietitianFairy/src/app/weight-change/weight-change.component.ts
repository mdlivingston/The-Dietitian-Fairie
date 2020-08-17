import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { EventData, Page } from 'tns-core-modules/ui/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ns-weight-change',
    templateUrl: './weight-change.component.html',
    styleUrls: ['./weight-change.component.css']
})
export class WeightChangeComponent implements OnInit
{
    @ViewChild('weightField', { static: false }) weightField;

    UBW: number = 0;
    weightChange: number = 0;

    currentWeight: number;
    usualWeight: number;

    constructor(
        public router: RouterExtensions,
        private dataService: DataService,
        private page: Page
    ) { }

    ngOnInit()
    {
        setTimeout(() =>
        {
            let textField: TextField = this.weightField.nativeElement;
            textField.focus();
        }, 500);
    }

    onCurrentWeightChange(args: EventData)
    {
        let textField = <TextField>args.object;
        this.currentWeight = Number(textField.text);
        this.calculateWeights();
    }

    onUsualWeightChange(args: EventData)
    {
        let textField = <TextField>args.object;
        this.usualWeight = Number(textField.text);
        this.calculateWeights();
    }

    calculateWeights()
    {
        if (this.usualWeight && this.currentWeight)
        {
            this.UBW = (this.currentWeight / this.usualWeight) * 100
            this.weightChange = ((this.currentWeight - this.usualWeight) / this.usualWeight) * 100
        }
        else
        {
            this.UBW = 0;
            this.weightChange = 0;
        }
    }

}
