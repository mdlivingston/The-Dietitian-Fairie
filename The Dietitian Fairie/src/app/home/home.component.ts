import { DataService } from './../services/data.service';
import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page/page";

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private page: Page, private dataService: DataService) {
        this.page.actionBarHidden = false;
    }

    ngOnInit(): void {
        const safeAreaInsets = this.dataService.getSafeAreaInsets();
        if (safeAreaInsets) {
            this.page.marginBottom = -1 * safeAreaInsets.bottom;
        }

    }
}
