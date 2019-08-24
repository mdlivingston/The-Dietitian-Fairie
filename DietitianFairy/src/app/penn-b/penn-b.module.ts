import { PennBComponent } from './penn-b.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { PennBRoutingModule } from "./penn-b-routing.module";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        PennBRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        PennBComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PennBModule { }
