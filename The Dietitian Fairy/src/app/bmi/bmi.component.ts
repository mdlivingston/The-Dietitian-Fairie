import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { AnimationCurve } from 'tns-core-modules/ui/enums/enums';
import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
@Component({
    selector: 'ns-bmi',
    templateUrl: './bmi.component.html',
    styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
    weight: number;
    weightKg: number;
    heightIn: number;
    heightFt: number;
    heightCm: number;

    bmi: string = '0';
    category = '';
    currentTabView = 'standard'
    tabItems: Array<SegmentedBarItem> = [];
    @ViewChild('overlay', { static: false }) overlay: ElementRef;
    @ViewChild("weightField", { static: false }) weightField: ElementRef;
    @ViewChild("heightFtField", { static: false }) heightFtField: ElementRef;
    @ViewChild("heightInField", { static: false }) heightInField: ElementRef;
    @ViewChild("fairy", { static: false }) fairy: ElementRef;
    constructor(public router: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = false;
    }

    ngOnInit() {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Standard Units";
        this.tabItems.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Metric Units";

        this.tabItems.push(segmentedBarItem);
        this.getCategory();

    }
    onTabChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        segmentedBar.selectedIndex == 0 ? this.currentTabView = 'standard' : this.currentTabView = 'metric';
    }
    onWeightChange(args) {
        let textField = <TextField>args.object;
        this.weight = Number(textField.text);
        this.calculateBMI();
    }
    onHeightFtChange(args) {
        let textField = <TextField>args.object;
        this.heightFt = Number(textField.text);
        this.calculateBMI();
    }
    onHeightInChange(args) {
        let textField = <TextField>args.object;
        this.heightIn = Number(textField.text);
        this.calculateBMI();
    }
    onWeightKgChange(args) {
        let textField = <TextField>args.object;
        this.weightKg = Number(textField.text);
        this.calculateBMI();
    }
    onHeightCmChange(args) {
        let textField = <TextField>args.object;
        this.heightCm = Number(textField.text);
        this.calculateBMI();
    }
    calculateBMI() {
        if (this.heightFt && this.weight && this.currentTabView == 'standard') {
            let heightInInches: number = (Number(this.heightFt) * 12) + Number(this.heightIn ? this.heightIn : 0);
            let bmi = (703 * Number(this.weight)) / (heightInInches * heightInInches)
            if (bmi > 0) {
                this.dropTapEllieFly();
            }
            this.bmi = bmi.toFixed(1);
        } else if (this.heightCm && this.weightKg && this.currentTabView == 'metric') {
            let bmi = Number(this.weightKg) / (this.heightCm * this.heightCm)
            if (bmi > 0) {
                this.dropTapEllieFly();
            }
            this.bmi = bmi.toFixed(1);
        } else {
            this.bmi = '0';
        }

        this.getCategory();
    }
    getCategory() {
        if (Number(this.bmi) < 18.5) {
            this.category = 'Underweight';
        } else if (Number(this.bmi) >= 18.5 && Number(this.bmi) <= 24.9) {
            this.category = 'Normal';
        } else if (Number(this.bmi) >= 25 && Number(this.bmi) <= 29.9) {
            this.category = 'Overweight';
        } else if (Number(this.bmi) >= 30.0 && Number(this.bmi) <= 34.9) {
            this.category = 'Obese Class I';
        } else if (Number(this.bmi) >= 35.0 && Number(this.bmi) <= 29.9) {
            this.category = 'Obese Class II';
        } else {
            this.category = 'Obese Class II'
        }
    }
    dropTapEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: -75, y: 35 },
            //scale: { x: 2, y: 2 },
            rotate: 380,
            duration: 800,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: -75, y: -105 },
                //scale: { x: 2, y: 2 },
                rotate: 30,
                duration: 500,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
    backFlipEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: -100, y: 0 },
            //scale: { x: 2, y: 2 },
            rotate: -380,
            duration: 2000,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: -30 },
                //scale: { x: 2, y: 2 },
                rotate: 20,
                duration: 2000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
}
