import { BenedictComponent } from './benedict.component';

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { BenedictRoutingModule } from "./benedict-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        BenedictRoutingModule
    ],
    declarations: [
        BenedictComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BenedictModule { }
