import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUsuarioAdmComponent } from './lista-usuario-adm.component';

describe('ListaUsuarioAdmComponent', () => {
  let component: ListaUsuarioAdmComponent;
  let fixture: ComponentFixture<ListaUsuarioAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUsuarioAdmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaUsuarioAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
