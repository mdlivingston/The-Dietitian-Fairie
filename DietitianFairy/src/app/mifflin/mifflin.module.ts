import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { MifflinRoutingModule } from './mifflin-routing.module';
import { MifflinComponent } from './mifflin.component';


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
