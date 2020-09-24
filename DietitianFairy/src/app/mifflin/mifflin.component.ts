import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { GridLayout, ListPicker, SegmentedBar, SegmentedBarItem, TextField } from "@nativescript/core";
import { AnimationCurve } from "@nativescript/core/ui/enums";
import { Page } from "@nativescript/core/ui/page";
import { DataService } from "./../services/data.service";
@Component({
    selector: "ns-mifflin",
    templateUrl: "./mifflin.component.html",
    styleUrls: ["./mifflin.component.css"]
})
export class MifflinComponent implements OnInit
{
    height: number;
    weight: number;
    age: number;

    answerMale: number = 0;
    answerFemale: number = 0;

    @ViewChild('factorField', { static: false }) factorField;
    @ViewChild('weightField', { static: false }) weightField;

    currentTabView = "standard";
    tabItems: Array<SegmentedBarItem> = [];

    factorList = [
        1,
        1.2,
        1.3,
        1.35,
        1.4,
        1.45,
        1.5,
        1.55,
        1.6,
        1.65,
        1.7,
        1.75,
        1.8,
        1.85,
        1.9,
        1.95,
        2.0
    ];
    factorIndex = 0;
    selectedFactor: number = 1;
    selectedFeverFactor: number;

    private _selectDateGridLayout: GridLayout;
    private _overlayGridLayout: GridLayout;

    energyFactor = "";

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

        this._selectDateGridLayout = this.page.getViewById(
            "selectDateGridLayout"
        );
        this._overlayGridLayout = this.page.getViewById("overlayGridLayout");

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
        this.calculateMifflin();
    }
    onHeightChange(args)
    {
        let textField = <TextField>args.object;
        this.height = Number(textField.text);
        this.calculateMifflin();
    }
    onAgeChange(args)
    {
        let textField = <TextField>args.object;
        this.age = Number(textField.text);
        this.calculateMifflin();
    }
    onTempChange(args)
    {
        let textField = <TextField>args.object;
        this.selectedFeverFactor = Number(textField.text);
        if (this.selectedFeverFactor > 0)
        {
            this.calculateMifflin();
        } else
        {
            this.selectedFeverFactor = null;
        }

    }
    // Select Date
    onOpenSelectFactor()
    {
        let textField: TextField = this.factorField.nativeElement;

        textField.dismissSoftInput();
        this._overlayGridLayout.animate({ opacity: 0.5, duration: 300 });
        this._selectDateGridLayout.animate({
            //opacity: 1,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: 0 },
            //scale: { x: 2, y: 2 },
            rotate: 0,
            duration: 500,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })
    }

    onCloseSelectFactor(isCancel: boolean)
    {
        // if (this.selectedFactor == 1) {
        //     this.calculateMifflin();
        // }
        // this.answerMale *= this.selectedFactor;
        // this.answerFemale *= this.selectedFactor;

        // this.answerMale *= ((this.selectedFeverFactor - 98.6) * 1.07)
        // this.answerFemale *= ((this.selectedFeverFactor - 98.6) * 1.07)
        this.calculateMifflin();
        this._overlayGridLayout.animate({ opacity: 0, duration: 400 });
        this._selectDateGridLayout.animate({
            //opacity: 0,
            //backgroundColor: new Color("Blue"),
            translate: { x: 1200, y: 0 },
            //scale: { x: 2, y: 2 },
            rotate: 196,
            duration: 500,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })
    }
    selectedIndexChangedFactor(args)
    {
        let picker = <ListPicker>args.object;
        this.factorIndex = picker.selectedIndex;
        this.selectedFactor = this.factorList[picker.selectedIndex];
    }
    calculateMifflin()
    {
        this.answerMale = 0;
        this.answerFemale = 0;
        if (this.age && this.weight && this.height)
        {
            if (this.currentTabView == "standard")
            {
                this.answerMale = this.dataService.mifflin(
                    this.weight * 0.45359237,
                    this.height * 2.54,
                    this.age,
                    1
                );
                this.answerFemale = this.dataService.mifflin(
                    this.weight * 0.45359237,
                    this.height * 2.54,
                    this.age,
                    0
                );
            } else
            {
                this.answerMale = this.dataService.mifflin(
                    this.weight,
                    this.height,
                    this.age,
                    1
                );
                this.answerFemale = this.dataService.mifflin(
                    this.weight,
                    this.height,
                    this.age,
                    0
                );
            }
        }

        this.answerMale *= this.selectedFactor;
        this.answerFemale *= this.selectedFactor;

        if (this.selectedFeverFactor > 98.6)
        {
            this.answerMale *= ((this.selectedFeverFactor - 98.6) * 1.07)
            this.answerFemale *= ((this.selectedFeverFactor - 98.6) * 1.07)
        }


    }
}
