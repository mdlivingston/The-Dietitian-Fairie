import { BmiComponent } from './bmi.component';
import { BmiRoutingModule } from './bmi-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BmiRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        BmiComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BmiModule { }
