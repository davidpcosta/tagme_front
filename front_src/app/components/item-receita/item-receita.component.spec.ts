import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemReceitaComponent } from './item-receita.component';

describe('ItemReceitaComponent', () => {
  let component: ItemReceitaComponent;
  let fixture: ComponentFixture<ItemReceitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemReceitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
