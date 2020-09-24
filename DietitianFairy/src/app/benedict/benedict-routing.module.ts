import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { BenedictComponent } from './benedict.component';




const routes: Routes = [
    { path: "", component: BenedictComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BenedictRoutingModule { }
