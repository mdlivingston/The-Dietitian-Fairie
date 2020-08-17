import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
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
