import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

	public static progress: boolean = true;
	constructor() { }

	ngOnInit(): void {

	}

	public getHiddenProgress(): boolean {
		return AuthenticationComponent.progress;
	}

	public static hiddenProgress() {
		AuthenticationComponent.progress = true;
	}

	public static showProgress() {
		AuthenticationComponent.progress = false;
	}
}
