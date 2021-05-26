import { Component, Input, OnInit } from '@angular/core';
import { InfoAcessoForm } from 'src/app/model/form/info-acesso-form';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  @Input()
  infoAcessoForm: InfoAcessoForm = new InfoAcessoForm;
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
