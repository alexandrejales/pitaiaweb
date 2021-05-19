import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialListItemComponent } from './filial-list-item.component';

describe('FilialListItemComponent', () => {
  let component: FilialListItemComponent;
  let fixture: ComponentFixture<FilialListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilialListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
