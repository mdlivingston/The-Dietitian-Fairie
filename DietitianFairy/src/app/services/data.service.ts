import { Injectable } from '@angular/core';
import * as application from "tns-core-modules/application";

@Injectable({
    providedIn: 'root'
})

export class DataService {

    constructor() { }

    getSafeAreaInsets(): undefined | {
        top: number,
        left: number,
        bottom: number,
        right: number
    } {
        if (application.ios && application.ios.window.safeAreaInsets) {
            return application.ios.window.safeAreaInsets;
        } else {
            return undefined;
        }
    }

    mifflin(weight, height, age, gender) {
        const w = 9.99 * weight;
        const h = 6.25 * height;
        const a = 5 * age;
        if (gender == 0) {
            return (9.99 * weight) + (6.25 * height) - 5 * age - 161;
        }
        return w + h - a + 5;
    }
    harris(weight, height, age, gender) {
        if (gender == 0) {
            return 655.1 + (9.56 * weight) + (1.85 * height) - (4.68 * age);
        }
        return 66.47 + (13.75 * weight) + (5 * height) - (4.68 * age);
    }
    pennB(mifflin, temp, liter) {
        return (mifflin * 0.96) + (liter * 31) + (temp * 167) - 6212;
    }
    penn(mifflin, temp, liter) {
        return (mifflin * 0.71) + (liter * 64) + (temp * 85) - 3085;
    }
}
