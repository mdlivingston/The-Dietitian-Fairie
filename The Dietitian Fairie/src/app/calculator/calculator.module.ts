import { CalculatorComponent } from './calculator.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { CalculatorRoutingModule } from './calculator-routing.module';


@NgModule({
    imports: [
        NativeScriptCommonModule,
        CalculatorRoutingModule
    ],
    declarations: [
        CalculatorComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CalculatorModule { }
