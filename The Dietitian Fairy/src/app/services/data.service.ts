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
            return w + h - a - 161;
        }
        return w + h - a + 5;
    }
    harris(weight, height, age, gender) {
        const w = 13.75 * weight;
        const h = 5 * height;
        const a = 5 * age;
        if (gender == 0) {
            return w + h - a - 161;
        }
        return w + h - a + 5;
    }
}
