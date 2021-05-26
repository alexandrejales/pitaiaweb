import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CadastroUsuarioAdmComponent } from './pages/administrativo/cadastro-usuario-adm/cadastro-usuario-adm.component';
import { ListaUsuarioAdmComponent } from './pages/administrativo/lista-usuario-adm/lista-usuario-adm.component';
import { ColaboradorCadastroComponent } from './pages/colaborador/colaborador-cadastro/colaborador-cadastro.component';
import { ColaboradorListarComponent } from './pages/colaborador/colaborador-listar/colaborador-listar.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { CadastroFilialComponent } from './pages/filiais/cadastro-filial/cadastro-filial.component';
import { ListaFilialComponent } from './pages/filiais/lista-filial/lista-filial.component';
import { CadastroUsuarioComponent } from './pages/usuarios/cadastro-usuario/cadastro-usuario.component';
import { ListarUsuarioComponent } from './pages/usuarios/listar-usuario/listar-usuario.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Routes = [
	{
		path: '',
		component: MenuComponent,
		children: [
			{ path: '', component: DashboardHomeComponent },
			{ path: 'tasklist', component: TaskListComponent },
			{ path: 'new', component: TaskFormComponent },
			{ path: 'edit/:id', component: TaskFormComponent },
			{ path: 'colaborador', component: ColaboradorListarComponent },
			{ path: 'colaborador/cadastro', component: ColaboradorCadastroComponent },

			{ path: 'filiais', component: ListaFilialComponent },
			{ path: 'filiais/cadastro', component: CadastroFilialComponent },
			{ path: 'filiais/cadastro/:idFilial', component: CadastroFilialComponent },

			{ path: 'administrativo', component: ListaUsuarioAdmComponent },
			{ path: 'administrativo/cadastro', component: CadastroUsuarioAdmComponent },
			{ path: 'administrativo/cadastro/:idUsuario', component: CadastroUsuarioAdmComponent },

			{ path: 'usuarios', component: ListarUsuarioComponent },
			{ path: 'usuarios/cadastro', component: CadastroUsuarioComponent },
			{ path: 'usuarios/cadastro/:idUsuario', component: CadastroUsuarioComponent },

		],
		canActivate: [AuthGuard]
	},
	{
		path: '',
		component: AuthenticationComponent,
		children: [
			{ path: '', redirectTo: 'login', pathMatch: 'full' },
			{ path: 'login', component: LoginComponent },
			{ path: 'create-account', component: CreateAccountComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
