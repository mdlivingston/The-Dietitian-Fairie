import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptAnimationsModule } from '@nativescript/angular/animations/animations.module';
import { NativeScriptFormsModule } from '@nativescript/angular/forms/forms.module';
import { NativeScriptModule } from '@nativescript/angular/nativescript.module';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from './services/data.service';


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        //NativeScriptMaterialCardViewModule,
        NativeScriptAnimationsModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [DataService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
