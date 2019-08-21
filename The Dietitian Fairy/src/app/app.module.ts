import { DataService } from './services/data.service';
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptMaterialCardViewModule } from "nativescript-material-cardview/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptAnimationsModule } from 'nativescript-angular/animations';
import { NativeScriptFormsModule } from "nativescript-angular/forms";
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptMaterialCardViewModule,
        NativeScriptAnimationsModule,
        NativeScriptFormsModule,
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
