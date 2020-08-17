import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "bmi", loadChildren: "~/app/bmi/bmi.module#BmiModule" },
    { path: "conversions", loadChildren: "~/app/conversions/conversions.module#ConversionsModule" },
    { path: "mifflin", loadChildren: "~/app/mifflin/mifflin.module#MifflinModule" },
    { path: "benedict", loadChildren: "~/app/benedict/benedict.module#BenedictModule" },
    { path: "penn", loadChildren: "~/app/penn/penn.module#PennModule" },
    { path: "penn-b", loadChildren: "~/app/penn-b/penn-b.module#PennBModule" },
    { path: "basic-needs", loadChildren: "~/app/basic-needs/basic-needs.module#BasicNeedsModule" },
    { path: "ibw", loadChildren: "~/app/ibw/ibw.module#IbwModule" },
    { path: "weight-change", loadChildren: "~/app/weight-change/weight-change.module#WeightChangeModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
