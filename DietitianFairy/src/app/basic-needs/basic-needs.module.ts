import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { BasicNeedsRoutingModule } from './basic-needs-routing.module';
import { BasicNeedsComponent } from './basic-needs.component';


@NgModule({
    declarations: [BasicNeedsComponent,
    ],
    imports: [
        BasicNeedsRoutingModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BasicNeedsModule { }
