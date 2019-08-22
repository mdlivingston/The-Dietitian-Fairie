import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "bmi", loadChildren: "~/app/bmi/bmi.module#BmiModule" },
    { path: "conversions", loadChildren: "~/app/conversions/conversions.module#ConversionsModule" },
    { path: "mifflin", loadChildren: "~/app/mifflin/mifflin.module#MifflinModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
