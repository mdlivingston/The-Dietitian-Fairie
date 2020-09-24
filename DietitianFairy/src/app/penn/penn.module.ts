import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { PennRoutingModule } from './penn-routing.module';
import { PennComponent } from './penn.component';

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PennRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        PennComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PennModule { }
