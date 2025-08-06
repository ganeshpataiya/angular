import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bgsetting } from './bgsetting';

describe('Bgsetting', () => {
  let component: Bgsetting;
  let fixture: ComponentFixture<Bgsetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bgsetting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bgsetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
