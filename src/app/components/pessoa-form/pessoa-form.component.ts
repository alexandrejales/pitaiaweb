import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/model/entity/pessoa';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.scss']
})
export class PessoaFormComponent implements OnInit {

  @Input()
  pessoa: Pessoa = new Pessoa;

  constructor() {
  }

  ngOnInit(): void {

  }

}
