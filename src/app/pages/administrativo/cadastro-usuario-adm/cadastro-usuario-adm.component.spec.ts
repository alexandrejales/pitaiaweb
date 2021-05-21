import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioAdmComponent } from './cadastro-usuario-adm.component';

describe('CadastroUsuarioAdmComponent', () => {
  let component: CadastroUsuarioAdmComponent;
  let fixture: ComponentFixture<CadastroUsuarioAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
