import { MifflinComponent } from './mifflin.component';
import { MifflinRoutingModule } from './mifflin-routing.module';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";


import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        MifflinRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        MifflinComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MifflinModule { }
