import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/model/entity/empresa';
import { Endereco } from 'src/app/model/entity/endereco';

const EMPRESA_DATA: Empresa[] = [
  { id: 1, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 1', inscricaoEstadual: '28452649', endereco: new Endereco },
  { id: 2, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 2', inscricaoEstadual: '28452649', endereco: new Endereco },
  { id: 3, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 3', inscricaoEstadual: '28452649', endereco: new Endereco },
  { id: 4, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 4', inscricaoEstadual: '28452649', endereco: new Endereco },
  { id: 5, bloqueado: true, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 5', inscricaoEstadual: '28452649', endereco: new Endereco },
  { id: 6, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 6', inscricaoEstadual: '28452649', endereco: new Endereco },
  { id: 7, bloqueado: false, cnpj: '23.29.268/0001-33', nomeFantasia: 'Filial 7', inscricaoEstadual: '28452649', endereco: new Endereco },
];

@Component({
  selector: 'app-filiais',
  templateUrl: './filiais.component.html',
  styleUrls: ['./filiais.component.scss']
})
export class FiliaisComponent implements OnInit {

  displayedColumns: string[] = ['id', 'bloqueado', 'cnpj', 'nomeFantasia', 'inscricaoEstadual', 'acao'];
  dataSource = EMPRESA_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}