import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hamburgemenu } from './hamburgemenu';

describe('Hamburgemenu', () => {
  let component: Hamburgemenu;
  let fixture: ComponentFixture<Hamburgemenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hamburgemenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hamburgemenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
