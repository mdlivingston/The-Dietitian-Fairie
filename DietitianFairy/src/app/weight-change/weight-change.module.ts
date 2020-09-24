import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { MalnutritionPdfComponent } from './malnutrition-pdf/malnutrition-pdf.component';
import { WeightChangeRoutingModule } from './weight-change-routing.module';
import { WeightChangeComponent } from './weight-change.component';



@NgModule({
    declarations: [WeightChangeComponent, MalnutritionPdfComponent],
    imports: [
        WeightChangeRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WeightChangeModule { }
