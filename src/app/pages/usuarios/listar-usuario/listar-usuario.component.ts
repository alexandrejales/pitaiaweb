import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/model/dto/usuario-dto';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  displayedColumns: string[] = ['item', 'nome', 'email', 'tipo', 'perfil', 'acao'];
  usuariosDtoList: UsuarioDto[] = [];
  index: number = 0;

  usuarioDto: UsuarioDto = new UsuarioDto;

  constructor() { }

  ngOnInit(): void {
  }

}
