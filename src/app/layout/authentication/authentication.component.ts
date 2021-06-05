import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

    public static progress = true;
    constructor() { }

    public static hiddenProgress(): void {
        AuthenticationComponent.progress = true;
    }

    public static showProgress(): void {
        AuthenticationComponent.progress = false;
    }

    ngOnInit(): void {

    }

    public getHiddenProgress(): boolean {
        return AuthenticationComponent.progress;
    }
}
