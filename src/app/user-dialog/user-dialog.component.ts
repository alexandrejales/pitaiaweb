import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-user-dialog',
	templateUrl: './user-dialog.component.html',
	styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<UserDialogComponent>) { }

	onNoClick(): void {
		this.dialogRef.close();
	}

	ngOnInit(): void {
	}

}
