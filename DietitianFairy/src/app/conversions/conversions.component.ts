
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { TextField } from '@nativescript/core';

@Component({
    selector: 'ns-conversions',
    templateUrl: './conversions.component.html',
    styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit
{
    inches: number;
    cmInch: number;
    meter: number;
    cmMeter: number;
    kg: number;
    pounds: number;
    faren: number;
    cels: number;
    ounces: number;
    mills: number;

    focus = 0;

    @ViewChild('inchField', { static: false }) inchField;
    constructor(public router: RouterExtensions) { }

    ngOnInit()
    {

        setTimeout(() =>
        {
            let textField: TextField = this.inchField.nativeElement;
            textField.focus();
        }, 500);
    }
    cmInchChange(args, switcher)
    {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0)
        {
            if (textField.text)
            {
                this.cmInch = Number(textField.text) * 2.54;
            } else
            {
                this.cmInch = null
            }

        } else if (this.focus == 1 && switcher == 1)
        {
            if (textField.text)
            {
                this.inches = Number(2.54) / Number(textField.text);
            } else
            {
                this.inches = null
            }
        }
    }

    cmMeterChange(args, switcher)
    {
        let textField = <TextField>args.object;

        if (this.focus == 0 && switcher == 0)
        {
            if (textField.text)
            {
                console.log(textField.text)
                this.cmMeter = Number(textField.text) * 100
            } else
            {
                this.cmMeter = null
            }

        } else if (this.focus == 1 && switcher == 1)
        {
            if (textField.text)
            {
                this.meter = Number(textField.text) / 100;
            } else
            {
                this.meter = null
            }
        }

    }

    kgPoundChange(args, switcher)
    {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0)
        {
            if (textField.text)
            {
                this.pounds = 2.2 * Number(textField.text);
            } else
            {
                this.pounds = null
            }

        } else if (this.focus == 1 && switcher == 1)
        {
            if (textField.text)
            {
                this.kg = Number(textField.text) / 2.2
            } else
            {
                this.kg = null
            }
        }
    }
    tempChange(args, switcher)
    {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0)
        {
            if (textField.text)
            {
                this.cels = (Number(textField.text) - 32) / 1.8;
            } else
            {
                this.cels = null
            }

        } else if (this.focus == 1 && switcher == 1)
        {
            if (textField.text)
            {
                this.faren = Number(textField.text) * 1.8 + 32;
            } else
            {
                this.faren = null
            }
        }

    }

    ozMilChange(args, switcher)
    {
        let textField = <TextField>args.object;
        if (this.focus == 0 && switcher == 0)
        {
            if (textField.text)
            {
                this.mills = Number(textField.text) / 0.033814;
            } else
            {
                this.mills = null;
            }


        } else if (this.focus == 1 && switcher == 1)
        {
            if (textField.text)
            {
                this.ounces = Number(textField.text) * 0.033814;
            } else
            {
                this.ounces = null;
            }
        }

    }

}
