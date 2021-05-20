import { Component, Input, OnInit } from '@angular/core';
import { Login } from 'src/app/model/entity/login';
import { Constante } from 'src/app/resource/contante';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input()
  email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
