import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
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
