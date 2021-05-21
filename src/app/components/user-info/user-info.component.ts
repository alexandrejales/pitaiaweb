import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
	selector: 'app-user-info',
	templateUrl: './user-info.component.html',
	styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

	@Input()
	email: string = '';

	constructor(private accountService: AccountService, private router: Router, private toastService: ToastService) { }

	ngOnInit(): void {
	}

	logout() {
		this.accountService.logout();
		this.toastService.openSeccessSnackBar("Logout realizado com sucesso");
		window.location.reload();
	}
}
