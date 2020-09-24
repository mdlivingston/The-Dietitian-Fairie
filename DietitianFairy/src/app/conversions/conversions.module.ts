import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { ConversionsRoutingModule } from "./conversions-routing.module";
import { ConversionsComponent } from './conversions.component';

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
