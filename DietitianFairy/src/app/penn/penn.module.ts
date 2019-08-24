import { PennComponent } from './penn.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { PennRoutingModule } from './penn-routing.module';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PennRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        PennComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PennModule { }
