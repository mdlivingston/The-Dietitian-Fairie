import { ConversionsComponent } from './conversions.component';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ConversionsRoutingModule } from "./conversions-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ConversionsRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        ConversionsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ConversionsModule { }
