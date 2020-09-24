import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { PennComponent } from './penn.component';


const routes: Routes = [
    { path: "", component: PennComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PennRoutingModule { }
