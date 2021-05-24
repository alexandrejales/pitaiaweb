import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskListItemComponent } from './task/task-list-item/task-list-item.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ColaboradorCadastroComponent } from './pages/colaborador-cadastro/colaborador-cadastro.component';
import { ColaboradorListarComponent } from './pages/colaborador-listar/colaborador-listar.component';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { LoginSnackBarComponent } from './layout/toast/login-snack-bar/login-snack-bar.component';
import { AlertSnackBarComponent } from './layout/toast/alert-snack-bar/alert-snack-bar.component';
import { SuccessSnackBarComponent } from './layout/toast/success-snack-bar/success-snack-bar.component';
import { InfoSnackBarComponent } from './layout/toast/info-snack-bar/info-snack-bar.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { FilialListItemComponent } from './components/filial-list-item/filial-list-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MatTableModule } from '@angular/material/table';
import { CadastroFilialComponent } from './pages/filiais/cadastro-filial/cadastro-filial.component';
import { ListaFilialComponent } from './pages/filiais/lista-filial/lista-filial.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { ListaUsuarioAdmComponent } from './pages/administrativo/lista-usuario-adm/lista-usuario-adm.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastroUsuarioAdmComponent } from './pages/administrativo/cadastro-usuario-adm/cadastro-usuario-adm.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

const maskConfig: Partial<IConfig> = {
	validation: false,
};

@NgModule({
	declarations: [
		AppComponent,
		TaskListComponent,
		TaskListItemComponent,
		TaskFormComponent,
		CreateAccountComponent,
		HomeComponent,
		AuthenticationComponent,
		LoginComponent,
		MenuComponent,
		FooterComponent,
		ColaboradorCadastroComponent,
		ColaboradorListarComponent,
		LoginSnackBarComponent,
		AlertSnackBarComponent,
		SuccessSnackBarComponent,
		InfoSnackBarComponent,
		DashboardHomeComponent,
		FilialListItemComponent,
		UserInfoComponent,
		CadastroFilialComponent,
		ListaFilialComponent,
		EnderecoFormComponent,
		ListaUsuarioAdmComponent,
		PessoaFormComponent,
		CadastroUsuarioAdmComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgxMaskModule.forRoot(maskConfig),
		MatSliderModule,
		LayoutModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatInputModule,
		MatGridListModule,
		MatCheckboxModule,
		MatSelectModule,
		MatDatepickerModule,
		MatSnackBarModule,
		MatTableModule,
		MatNativeDateModule,
		MatMenuModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
