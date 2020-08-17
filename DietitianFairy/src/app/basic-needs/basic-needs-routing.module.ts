import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { BasicNeedsComponent } from './basic-needs.component';

const routes: Routes = [
    { path: "", component: BasicNeedsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BasicNeedsRoutingModule { }
