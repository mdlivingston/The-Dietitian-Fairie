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
}
