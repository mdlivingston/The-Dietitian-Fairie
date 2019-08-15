import { ReferencesComponent } from './references.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ReferencesRoutingModule } from "./references-routing.module";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReferencesRoutingModule
    ],
    declarations: [
        ReferencesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ReferencesModule { }
