import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from '@nativescript/angular';
import { MifflinComponent } from './mifflin.component';

const routes: Routes = [
    { path: "", component: MifflinComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class MifflinRoutingModule { }
