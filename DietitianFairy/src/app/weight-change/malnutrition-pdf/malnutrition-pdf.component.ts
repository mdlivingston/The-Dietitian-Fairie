import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { LoadEventData, WebView } from "tns-core-modules/ui/web-view";
import { DataService } from '~/app/services/data.service';
@Component({
    selector: 'ns-malnutrition-pdf',
    templateUrl: './malnutrition-pdf.component.html',
    styleUrls: ['./malnutrition-pdf.component.css']
})
export class MalnutritionPdfComponent implements OnInit
{
    url = 'https://www.cmcgc.com/media/handouts/320121/T21_Jane_White.pdf';
    constructor(
        public routerExtensions: RouterExtensions,
        private dataService: DataService
    ) { }

    ngOnInit()
    {
    }
    onLoadStarted(args: LoadEventData)
    {
        const webView = args.object as WebView;

        if (!args.error)
        {
            console.log("Load Start");
            console.log(`EventName: ${args.eventName}`);
            console.log(`NavigationType: ${args.navigationType}`);
            console.log(`Url: ${args.url}`);
        } else
        {
            console.log(`EventName: ${args.eventName}`);
            console.log(`Error: ${args.error}`);
        }
    }
}
