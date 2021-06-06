import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from '@angular/cdk/layout';
import { MenuComponent } from './layout/menu/menu.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ColaboradorCadastroComponent } from './pages/colaborador/colaborador-cadastro/colaborador-cadastro.component';
import { ColaboradorListarComponent } from './pages/colaborador/colaborador-listar/colaborador-listar.component';
import { LoginSnackBarComponent } from './layout/toast/login-snack-bar/login-snack-bar.component';
import { AlertSnackBarComponent } from './layout/toast/alert-snack-bar/alert-snack-bar.component';
import { SuccessSnackBarComponent } from './layout/toast/success-snack-bar/success-snack-bar.component';
import { InfoSnackBarComponent } from './layout/toast/info-snack-bar/info-snack-bar.component';
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';
import { FilialListItemComponent } from './components/filial-list-item/filial-list-item.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { CadastroFilialComponent } from './pages/filiais/cadastro-filial/cadastro-filial.component';
import { ListaFilialComponent } from './pages/filiais/lista-filial/lista-filial.component';
import { EnderecoFormComponent } from './components/endereco-form/endereco-form.component';
import { ListaUsuarioAdmComponent } from './pages/administrativo/lista-usuario-adm/lista-usuario-adm.component';
import { PessoaFormComponent } from './components/pessoa-form/pessoa-form.component';
import { CadastroUsuarioAdmComponent } from './pages/administrativo/cadastro-usuario-adm/cadastro-usuario-adm.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AuthInterceptor } from './auth.interceptor';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { CadastroUsuarioComponent } from './pages/usuarios/cadastro-usuario/cadastro-usuario.component';
import { ListarUsuarioComponent } from './pages/usuarios/listar-usuario/listar-usuario.component';
import { DispositivoCadastroComponent } from './pages/dispositivos/dispositivo-cadastro/dispositivo-cadastro.component';
import { DispositivoListarComponent } from './pages/dispositivos/dispositivo-listar/dispositivo-listar.component';
import { TesteComponent } from './teste/teste.component';
import { MaterialModule } from './material.module';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { RootComponent } from './layout/root/root.component';

const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [
        AppComponent,
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
        UsuarioFormComponent,
        CadastroUsuarioComponent,
        ListarUsuarioComponent,
        DispositivoCadastroComponent,
        DispositivoListarComponent,
        TesteComponent,
        UserDialogComponent,
        RootComponent,
    ],
    imports: [
        MaterialModule,
        FormsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxMaskModule.forRoot(maskConfig),
        LayoutModule,

    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
