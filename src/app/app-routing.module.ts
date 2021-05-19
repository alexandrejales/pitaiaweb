import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ColaboradorCadastroComponent } from './pages/colaborador-cadastro/colaborador-cadastro.component';
import { ColaboradorListarComponent } from './pages/colaborador-listar/colaborador-listar.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { FiliaisComponent } from './pages/filiais/filiais.component';
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

			{ path: 'filiais', component: FiliaisComponent },

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
