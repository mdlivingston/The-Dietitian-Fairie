import { DataService } from "./../services/data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field/text-field";
import { AnimationCurve } from "tns-core-modules/ui/enums/enums";
import {
    SegmentedBarItem,
    SegmentedBar
} from "tns-core-modules/ui/segmented-bar/segmented-bar";
@Component({
    selector: "ns-benedict",
    templateUrl: "./benedict.component.html",
    styleUrls: ["./benedict.component.css"]
})
export class BenedictComponent implements OnInit {
    height: number;
    weight: number;
    age: number;

    answerMale: number = 0;
    answerFemale: number = 0;
    currentTabView = "standard";
    tabItems: Array<SegmentedBarItem> = [];
    constructor(
        public router: RouterExtensions,
        private dataService: DataService
    ) {}

    ngOnInit() {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Standard Units";
        this.tabItems.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Metric Units";

        this.tabItems.push(segmentedBarItem);
    }
    onTabChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        segmentedBar.selectedIndex == 0
            ? (this.currentTabView = "standard")
            : (this.currentTabView = "metric");
    }
    onWeightChange(args) {
        let textField = <TextField>args.object;
        this.weight = Number(textField.text);
        this.calculateMifflin();
    }
    onHeightChange(args) {
        let textField = <TextField>args.object;
        this.height = Number(textField.text);
        this.calculateMifflin();
    }
    onAgeChange(args) {
        let textField = <TextField>args.object;
        this.age = Number(textField.text);
        this.calculateMifflin();
    }

    calculateMifflin() {
        if (this.age && this.weight && this.height) {
            if (this.currentTabView == "metric") {
                this.answerFemale = this.dataService.harris(
                    this.weight,
                    this.height,
                    this.age,
                    0
                );
            } else {
                this.answerFemale = this.dataService.harris(
                    this.weight * 2.2,
                    this.height * 2.54,
                    this.age,
                    0
                );
            }
        }
        if (this.weight && this.height) {
            if (this.currentTabView == "metric") {
                this.answerMale = this.dataService.harris(
                    this.weight,
                    this.height,
                    this.age,
                    1
                );
            } else {
                this.answerMale = this.dataService.harris(
                    this.weight * 2.2,
                    this.height * 2.54,
                    this.age,
                    1
                );
            }
        }
    }
}
