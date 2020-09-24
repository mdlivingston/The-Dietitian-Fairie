import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { PennBComponent } from './penn-b.component';


const routes: Routes = [
    { path: "", component: PennBComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PennBRoutingModule { }
