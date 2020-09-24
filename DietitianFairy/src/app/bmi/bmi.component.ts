
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { SegmentedBar, SegmentedBarItem, TextField } from "@nativescript/core";
import { Page } from "@nativescript/core/ui/page";


@Component({
    selector: "ns-bmi",
    templateUrl: "./bmi.component.html",
    styleUrls: ["./bmi.component.css"]
})
export class BmiComponent implements OnInit
{
    weight: number;
    weightKg: number;
    heightIn: number;
    heightFt: number;
    heightCm: number;

    bmi: string = "0";
    category = "";
    currentTabView = "standard";
    tabItems: Array<SegmentedBarItem> = [];
    @ViewChild("overlay", { static: false }) overlay: ElementRef;
    @ViewChild("weightField", { static: false }) weightField: ElementRef;
    @ViewChild("heightFtField", { static: false }) heightFtField: ElementRef;
    @ViewChild("heightInField", { static: false }) heightInField: ElementRef;

    constructor(public router: RouterExtensions, private page: Page)
    {
        this.page.actionBarHidden = false;
    }

    ngOnInit()
    {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Standard Units";
        this.tabItems.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Metric Units";

        this.tabItems.push(segmentedBarItem);
        this.getCategory();
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
        this.calculateBMI();
    }
    onHeightFtChange(args)
    {
        let textField = <TextField>args.object;
        this.heightFt = Number(textField.text);
        this.calculateBMI();
    }
    onHeightInChange(args)
    {
        let textField = <TextField>args.object;
        this.heightIn = Number(textField.text);
        this.calculateBMI();
    }
    onWeightKgChange(args)
    {
        let textField = <TextField>args.object;
        this.weightKg = Number(textField.text);
        this.calculateBMI();
    }
    onHeightCmChange(args)
    {
        let textField = <TextField>args.object;
        this.heightCm = Number(textField.text);
        this.calculateBMI();
    }
    calculateBMI()
    {
        if ((this.heightIn || this.heightFt) && this.weight && this.currentTabView == "standard")
        {
            let heightInInches: number =
                Number(this.heightFt ? this.heightFt : 0) * 12 +
                Number(this.heightIn ? this.heightIn : 0);
            let bmi = (703 * Number(this.weight)) / (heightInInches * heightInInches);
            this.bmi = bmi.toFixed(2);
        } else if (
            this.heightCm &&
            this.weightKg &&
            this.currentTabView == "metric"
        )
        {
            let bmi = Number(this.weightKg) / (this.heightCm * this.heightCm);
            this.bmi = bmi.toFixed(1);
        } else
        {
            this.bmi = "0";
        }

        this.getCategory();
    }
    getCategory()
    {
        if (Number(this.bmi) < 18.5)
        {
            this.category = "Underweight";
        } else if (Number(this.bmi) >= 18.5 && Number(this.bmi) <= 24.9)
        {
            this.category = "Normal";
        } else if (Number(this.bmi) >= 25 && Number(this.bmi) <= 29.9)
        {
            this.category = "Overweight";
        } else if (Number(this.bmi) >= 30.0 && Number(this.bmi) <= 34.9)
        {
            this.category = "Obese Class I";
        } else if (Number(this.bmi) >= 35.0 && Number(this.bmi) <= 29.9)
        {
            this.category = "Obese Class II";
        } else
        {
            this.category = "Obese Class II";
        }
    }
}
