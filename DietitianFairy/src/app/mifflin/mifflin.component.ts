import { DataService } from './../services/data.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TextField } from 'tns-core-modules/ui/text-field/text-field';
import { AnimationCurve } from 'tns-core-modules/ui/enums/enums';

@Component({
    selector: 'ns-mifflin',
    templateUrl: './mifflin.component.html',
    styleUrls: ['./mifflin.component.css']
})
export class MifflinComponent implements OnInit {
    height: number;
    weight: number;
    age: number;

    answerMale: number = 0;
    answerFemale: number = 0;

    @ViewChild("fairy", { static: false }) fairy: ElementRef;
    constructor(public router: RouterExtensions,
        private dataService: DataService) { }

    ngOnInit() {

    }

    onWeightChange(args) {
        let textField = <TextField>args.object;
        this.weight = Number(textField.text);
        this.calculateMifflin();
    }
    onHeightChange(args) {
        let textField = <TextField>args.object;
        this.height = Number(textField.text);
        this.calculateMifflin();
    }
    onAgeChange(args) {
        let textField = <TextField>args.object;
        this.age = Number(textField.text);
        this.calculateMifflin();
    }

    calculateMifflin() {
        if (this.age && this.weight && this.height) {
            this.answerMale = this.dataService.mifflin(this.weight, this.height, this.age, 1);
            this.answerFemale = this.dataService.mifflin(this.weight, this.height, this.age, 0);
            this.dropTapEllieFly();
        }
    }
    dropTapEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 750, y: 0 },
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
                translate: { x: -300, y: 0 },
                //scale: { x: 2, y: 2 },
                rotate: 30,
                duration: 5000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
}
