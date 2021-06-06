import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

    public static progress = true;

    constructor() { }

    public static hiddenProgress(): void {
        RootComponent.progress = true;
    }

    public static showProgress(): void {
        RootComponent.progress = false;
    }

    ngOnInit(): void {

    }

    public getHiddenProgress(): boolean {
        return RootComponent.progress;
    }
}
