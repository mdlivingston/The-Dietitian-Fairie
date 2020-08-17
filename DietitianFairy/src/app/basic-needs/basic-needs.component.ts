import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'tns-core-modules/ui/page';
import { SegmentedBar, SegmentedBarItem } from 'tns-core-modules/ui/segmented-bar';
import { TextField } from 'tns-core-modules/ui/text-field';
import { DataService } from '../services/data.service';

@Component({
    selector: 'ns-basic-needs',
    templateUrl: './basic-needs.component.html',
    styleUrls: ['./basic-needs.component.css']
})
export class BasicNeedsComponent implements OnInit
{
    calorieNeeds: number = 0;
    proteinNeeds: number = 0;
    fluidNeeds: number = 0;
    energy: number;
    protein: number;
    fluid: number;
    bodyWeight: number;

    @ViewChild('weightField', { static: false }) weightField;

    currentTabView = "standard";
    tabItems: Array<SegmentedBarItem> = [];


    constructor(
        public router: RouterExtensions,
        private dataService: DataService,
        private page: Page
    ) { }

    ngOnInit()
    {
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Standard Units";
        this.tabItems.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Metric Units";

        this.tabItems.push(segmentedBarItem);

        setTimeout(() =>
        {
            let textField: TextField = this.weightField.nativeElement;
            textField.focus();
        }, 500);

    }
    onTabChange(args)
    {
        let segmentedBar = <SegmentedBar>args.object;
        segmentedBar.selectedIndex == 0
            ? (this.currentTabView = "standard")
            : (this.currentTabView = "metric");
    }

    onEnergyChange(args)
    {
        let textField = <TextField>args.object;
        this.energy = Number(textField.text);
        this.calculateCalories();
    }

    onProteinChange(args)
    {
        let textField = <TextField>args.object;
        this.protein = Number(textField.text);
        this.calculateProtein();
    }

    onFluidChange(args)
    {
        let textField = <TextField>args.object;
        this.fluid = Number(textField.text);
        this.calculateFluid();
    }

    onBodyWeightChange(args)
    {
        let textField = <TextField>args.object;
        this.bodyWeight = Number(textField.text);
        this.calculateCalories();
        this.calculateProtein();
        this.calculateFluid();
    }

    calculateCalories()
    {
        if (this.energy && this.bodyWeight && this.currentTabView == 'standard')
        {
            this.calorieNeeds = this.energy * (this.bodyWeight / 2.2)
        } else if (this.energy && this.bodyWeight && this.currentTabView == 'metric')
        {
            this.calorieNeeds = this.energy * this.bodyWeight;
        } else
        {
            this.calorieNeeds = 0;
        }
    }

    calculateProtein()
    {
        if (this.protein && this.bodyWeight && this.currentTabView == 'standard')
        {
            this.proteinNeeds = this.protein * (this.bodyWeight / 2.2)
        } else if (this.protein && this.bodyWeight && this.currentTabView == 'metric')
        {
            this.proteinNeeds = this.protein * this.bodyWeight;
        } else
        {
            this.proteinNeeds = 0;
        }
    }

    calculateFluid()
    {
        if (this.fluid && this.bodyWeight && this.currentTabView == 'standard')
        {
            this.fluidNeeds = this.fluid * (this.bodyWeight / 2.2)
        } else if (this.fluid && this.bodyWeight && this.currentTabView == 'metric')
        {
            this.fluidNeeds = this.fluid * this.bodyWeight;
        } else
        {
            this.fluidNeeds = 0;
        }
    }

}
