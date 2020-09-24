import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { BmiRoutingModule } from './bmi-routing.module';
import { BmiComponent } from './bmi.component';


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
