import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { IbwRoutingModule } from './ibw-routing.module';
import { IbwComponent } from './ibw.component';


@NgModule({
    declarations: [IbwComponent],
    imports: [
        IbwRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class IbwModule { }
