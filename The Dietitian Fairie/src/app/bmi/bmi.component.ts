import { Page } from 'tns-core-modules/ui/page/page';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { AnimationCurve } from 'tns-core-modules/ui/enums/enums';

@Component({
    selector: 'ns-bmi',
    templateUrl: './bmi.component.html',
    styleUrls: ['./bmi.component.css']
})
export class BmiComponent implements OnInit {
    weight: number;
    heightIn: number;
    heightFt: number;
    bmi: string = '0';
    @ViewChild('overlay', { static: false }) overlay: ElementRef;
    @ViewChild("weightField", { static: false }) weightField: ElementRef;
    @ViewChild("heightFtField", { static: false }) heightFtField: ElementRef;
    @ViewChild("heightInField", { static: false }) heightInField: ElementRef;
    @ViewChild("fairie", { static: false }) fairie: ElementRef;
    constructor(public router: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
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

    calculateBMI() {
        if (this.heightFt && this.weight) {
            let heightInInches: number = (Number(this.heightFt) * 12) + Number(this.heightIn ? this.heightIn : 0);
            let bmi = (703 * Number(this.weight)) / (heightInInches * heightInInches)
            if (bmi > 0) {
                this.dropTapEllieFly();
            }
            this.bmi = bmi.toFixed(1);
        } else {
            this.bmi = '0';
        }

    }
    dropTapEllieFly() {
        this.fairie.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: -35, y: 35 },
            //scale: { x: 2, y: 2 },
            rotate: -50,
            duration: 800,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairie.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: -100 },
                //scale: { x: 2, y: 2 },
                rotate: 0,
                duration: 500,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
    backFlipEllieFly() {
        this.fairie.nativeElement.animate({
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
            this.fairie.nativeElement.animate({
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
