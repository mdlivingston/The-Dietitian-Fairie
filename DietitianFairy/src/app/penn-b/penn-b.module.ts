import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { PennBRoutingModule } from "./penn-b-routing.module";
import { PennBComponent } from './penn-b.component';



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
