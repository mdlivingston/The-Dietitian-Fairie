import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ConversionsComponent } from './conversions.component';



const routes: Routes = [
    { path: "", component: ConversionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ConversionsRoutingModule { }
