import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { ListPicker } from 'tns-core-modules/ui/list-picker';
import { EventData, Page } from 'tns-core-modules/ui/page';
import { TextField } from 'tns-core-modules/ui/text-field';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ns-ibw',
    templateUrl: './ibw.component.html',
    styleUrls: ['./ibw.component.css']
})
export class IbwComponent implements OnInit
{
    @ViewChild('heightField', { static: false }) heightField;

    ibwMale: number = 0;
    percentIBWMale: number = 0;
    ibwFemale: number = 0;
    percentIBWFemale: number = 0;

    height: number;
    currentWeight: number;

    sizes = ['Small', 'Medium', 'Large'];
    frameSize: string = 'Medium';
    constructor(
        public router: RouterExtensions,
        private dataService: DataService,
        private page: Page
    ) { }

    ngOnInit()
    {
        setTimeout(() =>
        {
            let textField: TextField = this.heightField.nativeElement;
            textField.focus();
        }, 500);
    }
    onHeightChange(args: EventData)
    {
        let textField = <TextField>args.object;
        this.height = Number(textField.text);
        this.calculateMales();
        this.calculateFemales();
    }
    onWeightChange(args: EventData)
    {
        let textField = <TextField>args.object;
        this.currentWeight = Number(textField.text);
        this.calculateMales();
        this.calculateFemales();
    }

    calculateMales()
    {
        if (this.height)
        {
            this.ibwMale = 106;

            const difference = this.height - 60;
            if (this.height > 60)
            {
                const difference = this.height - 60;
                this.ibwMale += 6 * difference;
            }

            if (this.height < 60)
            {
                const difference = 60 - this.height;
                this.ibwMale -= 6 * difference;
            }


            if (this.frameSize == 'Small')
                this.ibwMale = this.ibwMale - (this.ibwMale * 0.10);

            if (this.frameSize == 'Large')
                this.ibwMale = this.ibwMale + (this.ibwMale * 0.10);

            if (this.currentWeight)
                this.percentIBWMale = (this.currentWeight / this.ibwMale) * 100;
            else
                this.percentIBWMale = 0;

        }
        else
        {
            this.ibwMale = 0;
            this.percentIBWMale = 0;
        }
    }

    calculateFemales()
    {
        if (this.height)
        {
            this.ibwFemale = 100;

            if (this.height > 60)
            {
                const difference = this.height - 60;
                this.ibwFemale += 5 * difference;
            }

            if (this.height < 60)
            {
                const difference = 60 - this.height;
                this.ibwFemale -= 5 * difference;
            }

            if (this.frameSize == 'Small')
                this.ibwFemale -= (this.ibwFemale * 0.10);

            if (this.frameSize == 'Large')
                this.ibwFemale += (this.ibwFemale * 0.10);

            if (this.currentWeight)
                this.percentIBWFemale = (this.currentWeight / this.ibwFemale) * 100
            else
                this.percentIBWFemale = 0;

        }
        else
        {
            this.ibwFemale = 0;
            this.percentIBWMale = 0;
        }
    }
    onSelectedIndexChanged(args: EventData)
    {
        const picker = <ListPicker>args.object;
        this.frameSize = this.sizes[picker.selectedIndex]
        this.calculateMales();
        this.calculateFemales();
        //console.log(`index: ${picker.selectedIndex}; item" ${this.years[picker.selectedIndex]}`);
    }
}
