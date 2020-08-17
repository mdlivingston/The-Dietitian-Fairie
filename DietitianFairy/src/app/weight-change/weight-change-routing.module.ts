import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { MalnutritionPdfComponent } from './malnutrition-pdf/malnutrition-pdf.component';
import { WeightChangeComponent } from './weight-change.component';

const routes: Routes = [
    { path: "", component: WeightChangeComponent },
    { path: "malnutrition-pdf", component: MalnutritionPdfComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class WeightChangeRoutingModule { }
