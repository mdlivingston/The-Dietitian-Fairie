import { DataService } from './../services/data.service';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";
import { GridLayout } from 'tns-core-modules/ui/layouts/grid-layout/grid-layout';
import { RouterExtensions } from 'nativescript-angular/router';
import { AnimationCurve } from "tns-core-modules/ui/enums";
import { TextField } from "tns-core-modules/ui/text-field";
import { LocationStrategy } from '@angular/common';
@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    @ViewChild("fairy", { static: false }) fairy: ElementRef;
    constructor(public router: RouterExtensions, private page: Page, private location: LocationStrategy) {
        location.onPopState(() => {
            this.dropInEllieFly();
        });
    }

    ngOnInit() {
        //this.openModal('bmi');
        // this.dropInEllieFly();
        setTimeout(() => {
            this.dropInEllieFly();
        }, 500);
    }


    goToPage(page) {
        if (page == '/bmi') {
            this.pageUpEllieFly()
            setTimeout(() => {
                this.router.navigate([page], { clearHistory: false, animated: true, transition: { name: 'curlUp', duration: 1000 } });
            }, 100);
        } else if (page == '/conversions') {
            this.pageSlideEllieFly()
            setTimeout(() => {
                this.router.navigate([page], { clearHistory: false, animated: true, transition: { name: 'slideLeft', duration: 700 } });
            }, 100);
        } else if (page == '/mifflin') {
            this.floatDownEllieFly(380)
            setTimeout(() => {
                this.backFlipEllieFly();
                this.router.navigate([page], { clearHistory: false, animated: true, transition: { name: 'flip', duration: 0 } });
            }, 900);
        } else if (page == '/benedict') {
            this.floatDownEllieFly(580)
            setTimeout(() => {
                this.backFlipEllieFly();
                this.router.navigate([page], { clearHistory: false, animated: true, transition: { name: 'flip', duration: 0 } });
            }, 900);
        } else if (page == '/penn-b') {
            this.shootDownEllieFly();
            setTimeout(() => {
                //this.backFlipEllieFly();
                this.router.navigate([page], { clearHistory: false, animated: true, transition: { name: 'slideBottom', duration: 0 } });
            }, 100);
        } else if (page == '/penn') {
            this.spiralDownEllieFly()
            setTimeout(() => {
                //this.backFlipEllieFly();
                this.router.navigate([page], { clearHistory: false, animated: true, transition: { name: 'slideTop', duration: 0 } });
            }, 1700);
        }


    }

    flyEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 400, y: 0 },
            //scale: { x: 2, y: 2 },
            rotate: 100,
            duration: 1000,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: -400, y: -400 },
                //scale: { x: 2, y: 2 },
                //rotate: 100,
                duration: 0,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            }).then(() => {
                this.fairy.nativeElement.animate({
                    //opacity: .9,
                    //backgroundColor: new Color("Blue"),
                    translate: { x: 0, y: 0 },
                    //scale: { x: 2, y: 2 },
                    rotate: 360,
                    duration: 3000,
                    //delay: 20,
                    //iterations: 5,
                    curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
                })
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
                translate: { x: 0, y: 0 },
                //scale: { x: 2, y: 2 },
                rotate: 20,
                duration: 2000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
    dropInEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
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
    pageUpEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 200, y: 700 },
            //scale: { x: 2, y: 2 },
            rotate: 80,
            duration: 700,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })
    }
    pageSlideEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 500, y: 0 },
            //scale: { x: 2, y: 2 },
            rotate: 40,
            duration: 1200,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })
    }
    floatDownEllieFly(y) {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: y },
            //scale: { x: 2, y: 2 },
            rotate: -90,
            duration: 800,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: y },
                //scale: { x: 2, y: 2 },
                rotate: -30,
                duration: 100,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
    shootDownEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: 2000 },
            //scale: { x: 2, y: 2 },
            rotate: 180,
            duration: 800,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        })
    }
    spiralDownEllieFly() {
        this.fairy.nativeElement.animate({
            //opacity: .9,
            //backgroundColor: new Color("Blue"),
            translate: { x: 0, y: 1500 },
            //scale: { x: 2, y: 2 },
            rotate: 360,
            duration: 1000,
            //delay: 20,
            //iterations: 5,
            curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
        }).then(() => {
            this.fairy.nativeElement.animate({
                //opacity: .9,
                //backgroundColor: new Color("Blue"),
                translate: { x: 0, y: 0 },
                //scale: { x: 2, y: 2 },
                rotate: -90,
                duration: 3000,
                //delay: 20,
                //iterations: 5,
                curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
            })
        })
    }
}
