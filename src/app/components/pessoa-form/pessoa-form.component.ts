import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/entity/pessoa';
import { PessoaForm } from 'src/app/model/form/pessoa-form';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  @Input()
  pessoa: PessoaForm = new PessoaForm;

  constructor() {
  }

  ngOnInit(): void {

  }

}
