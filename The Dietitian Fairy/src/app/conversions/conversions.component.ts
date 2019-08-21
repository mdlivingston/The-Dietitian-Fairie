import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { AnimationCurve } from 'tns-core-modules/ui/enums/enums';
@Component({
    selector: 'ns-conversions',
    templateUrl: './conversions.component.html',
    styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit {
    inches: number;
    cmInch: number;
    meter: number;
    cmMeter: number;
    kg: number;
    pounds: number;
    faren: number;
    cels: number;

    focus = 0;

    @ViewChild("fairy", { static: false }) fairy: ElementRef;
    constructor(public router: RouterExtensions) { }

    ngOnInit() {
    }
    cmInchChange(args, switcher) {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0) {
            if (textField.text) {
                this.cmInch = Number(textField.text) * 2.54;
            } else {
                this.cmInch = null
            }

        } else if (this.focus == 1 && switcher == 1) {
            if (textField.text) {
                this.inches = Number(2.54) / Number(textField.text);
            } else {
                this.inches = null
            }
        }
        this.dropTapEllieFly()
    }

    cmMeterChange(args, switcher) {
        let textField = <TextField>args.object;

        if (this.focus == 0 && switcher == 0) {
            if (textField.text) {
                console.log(textField.text)
                this.cmMeter = Number(textField.text) * 100
            } else {
                this.cmMeter = null
            }

        } else if (this.focus == 1 && switcher == 1) {
            if (textField.text) {
                this.meter = Number(textField.text) / 100;
            } else {
                this.meter = null
            }
        }

    }

    kgPoundChange(args, switcher) {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0) {
            if (textField.text) {
                this.pounds = 2.2 * Number(textField.text);
            } else {
                this.pounds = null
            }

        } else if (this.focus == 1 && switcher == 1) {
            if (textField.text) {
                this.kg = Number(textField.text) / 2.2
            } else {
                this.kg = null
            }
        }

    }
    tempChange(args, switcher) {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0) {
            if (textField.text) {
                this.cels = (Number(textField.text) - 32) / 1.8;
            } else {
                this.cels = null
            }

        } else if (this.focus == 1 && switcher == 1) {
            if (textField.text) {
                this.faren = Number(textField.text) * 1.8 + 32;
            } else {
                this.faren = null
            }
        }
    }
    pageSlideEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: 20 },
            //scale: { x: 2, y: 2 },
            rotate: 0,
            duration: 1000,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: -1000, y: 0 },
                //scale: { x: 2, y: 2 },
                rotate: 30,
                duration: 400,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })

    }
    dropTapEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 100, y: 150 },
            //scale: { x: 2, y: 2 },
            rotate: 380,
            duration: 2000,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: 100, y: 1000 },
                //scale: { x: 2, y: 2 },
                rotate: 30,
                duration: 4000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
}
